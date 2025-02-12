import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import LandingPage from './LandingPage';
import Inbox from './components/Inbox';
import Mail from './components/Mail';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import PrivateRoute from './Context/PrivateRoute';
import { AuthProvider } from './Context/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protect `/app` with PrivateRoute */}
      <Route path="/app" element={<PrivateRoute />}>
        <Route path="" element={<Layout />}>
          <Route index element={<Inbox />} />
          <Route path="/app/mail/:id" element={<Mail />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <div className='h-screen'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
