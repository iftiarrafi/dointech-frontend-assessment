import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === 'register' && <Register setCurrentPage={setCurrentPage} />}
      </main>
      <Footer />
    </div>
  );
}