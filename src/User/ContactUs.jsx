import React from 'react';
import { Usernavbar } from './Usernavbar';

export const ContactUs = () => {
  const containerStyle = {
    backgroundColor: '#f0f8ff', // soft blue background
    minHeight: '100vh',
    paddingTop: '80px',
    paddingBottom: '40px'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)'
  };

  const headerStyle = {
    color: '#004080',
    fontWeight: 'bold'
  };

  const linkStyle = {
    color: '#0066cc',
    textDecoration: 'none'
  };

  const iconStyle = {
    marginRight: '8px',
    fontWeight: 'bold'
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={cardStyle}>
            <h2 className="text-center mb-4" style={headerStyle}>Contact Us</h2>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span style={iconStyle}>📧</span>
                <a href="mailto:maheshprajapati7666@gmail.com" style={linkStyle}>maheshprajapati7666@gmail.com</a>
              </li>
              <li className="list-group-item">
                <span style={iconStyle}>📞</span>
                <a href="tel:+91 96873 37666" style={linkStyle}>+91 96873 37666</a>
              </li>
              <li className="list-group-item">
                <span style={iconStyle}>📷</span>
                <a href="https://www.instagram.com/mbm.homerenovation?igsh=Y28zMGZhOWltZTQ1" target="_blank" rel="noreferrer" style={linkStyle}>@MBMCreation</a>
              </li>
              <li className="list-group-item">
                <span style={iconStyle}>📘</span>
                <a href="https://www.facebook.com/share/16RpSVcGVM/" target="_blank" rel="noreferrer" style={linkStyle}>facebook.com/mbmcreation</a>
              </li>
            </ul>

            <p className="mt-4 text-center text-muted">We’re here to help 24/7 with your needs.</p>
          </div>
        </div>
      </div>
      <Usernavbar/>
    </div>
  );
};
