import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">InterviewPrep</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
{user?.role?.toLowerCase() === 'student' && <li><Link to="/interview">Interview</Link></li>}
{user?.role?.toLowerCase() === 'admin' && <li><Link to="/admin">Admin</Link></li>}
        {user && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
