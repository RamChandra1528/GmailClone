const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
        read: { type: Boolean, default: false },
    },
    { timestamps: true } // This ensures createdAt and updatedAt fields are added automatically
);

module.exports = mongoose.model('Email', EmailSchema);


// emailSchema.index({ subject: 'text', message: 'text', from: 'text' });

// const Email = mongoose.model('Email', emailSchema);
// module.exports = Email;
