// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">Bue News</Link>
        <div className="space-x-4">
          <Link className="hover:text-gray-400" to="/home">Home</Link>
          <Link className="hover:text-gray-400" to="/add">Add News</Link>
          <Link className="hover:text-gray-400" to="/login">Login</Link>
          <Link className="hover:text-gray-400" to="/signup">Signup</Link>
          <Link className="hover:text-gray-400"to="/news-list">News List</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
