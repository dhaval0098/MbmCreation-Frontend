import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../images/logo.jpeg';

export const Usernavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const handleLogout = () => {
    localStorage.clear(); // or localStorage.removeItem('userEmail') and so on
    toast.success("Logged out successfully");

    // Delay navigation slightly to show toast
    setTimeout(() => {
      Navigate("/");
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sidebar width based on screen size
  const sidebarWidth = isMobile ? '180px' : '250px';

  const sidebarStyle = {
    position: 'fixed',
    top: '56px', // height of navbar
    right: sidebarOpen ? '0' : `-${sidebarWidth}`,
    width: sidebarWidth,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // transparent white
    backdropFilter: 'blur(10px)', // adds blur to background content
    boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
    transition: 'right 0.3s ease',
    zIndex: '1050',
    padding: '15px'
  };

  const closeBtnStyle = {
    fontSize: '24px',
    border: 'none',
    background: 'none',
    float: 'right',
    margin: '10px',
    cursor: 'pointer'
  };

  const hamburgerBtnStyle = {
    width: '35px',
    height: '30px',
    border: 'none',
    background: 'transparent'
  };

  const barStyle = {
    height: '3px',
    width: '100%',
    backgroundColor: '#343a40',
    marginBottom: '4px'
  };

  // Inline style for logo responsive size
  const logoStyle = {
    width: isMobile ? '120px' : '180px', // smaller on mobile, larger on PC
    height: 'auto'
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <a className="navbar-brand" href="#" style={{ fontFamily: 'forte', color: 'blue',fontSize:"1.1rem" }}>MBMCreation</a>
        <img src={logo} alt="Logo" style={{height:"2rem",}} />

        <button 
          className="btn d-flex flex-column justify-content-around p-2 ml-auto" 
          onClick={toggleSidebar} 
          style={hamburgerBtnStyle}
        >
          <span style={barStyle}></span>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
        </button>
      </nav>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <button style={closeBtnStyle} onClick={toggleSidebar}>&times;</button>
        <ul className="list-unstyled mt-4">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/contactus" onClick={toggleSidebar}>Contact Us</Link></li>
          <li><Link to="/addwork" onClick={toggleSidebar}>Work Update</Link></li>
          <li><Link to="/workgallery" onClick={toggleSidebar}>Work Gallery</Link></li>
          <li><Link to="/queries" onClick={toggleSidebar}>Queries</Link></li>
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>  
    </>
  );
};
