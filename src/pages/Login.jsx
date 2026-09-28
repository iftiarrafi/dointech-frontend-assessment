import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setAuthError } from '../features/auth/authSlice';

export default function Login({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      dispatch(setAuthError('Please fill in all fields'));
      return;
    }

    const userData = { email, name: email.split('@')[0] };
    dispatch(loginSuccess(userData));
    setCurrentPage('home');
  };

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4 border border-red-200">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg shadow transition-all text-sm"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <span 
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => setCurrentPage('register')}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}