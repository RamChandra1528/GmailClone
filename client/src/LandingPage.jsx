/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Gmail Clone</h1>
      <p className="text-lg text-gray-600 mb-6">Your personal email experience, remained.</p>

      <div className="space-x-4">
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
