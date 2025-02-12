const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Database Connection
const connectDB = require('./db/db');
connectDB();


const authRoutes = require('./routes/user.routes');
const emailRoutes = require('./routes/email.routes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(cors({
  origin: "http://localhost:5173", // Adjust based on frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/email',emailRoutes)

app.get('/',(req,res)=>{
  res.send("Backend Properly worked !")
})
app.get('/api/auth/users/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running at port: http://localhost:${port}`);
});

