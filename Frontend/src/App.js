import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AddNews from './components/AddNews';
import EditNews from './components/EditNews';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/news-list" element={<NewsList />} />
          <Route path="/edit-news/:id" element={<EditNews />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
