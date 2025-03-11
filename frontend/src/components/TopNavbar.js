import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './topnav.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function TopNavbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="topnav">
      {/* Logo */}
      <img
        style={{
          width: "40px",
          zIndex: "999",
        }}
        src="logo.jpg"
        alt="logo"
      />

      {/* Navigation Links for Desktop */}
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "link active-link" : "link"}
        >
          WONs
        </NavLink>
        <NavLink
          to="/whitepaper"
          className={({ isActive }) => isActive ? "link active-link" : "link"}
        >
          Whitepaper
        </NavLink>
        <NavLink
          to="/roadmap"
          className={({ isActive }) => isActive ? "link active-link" : "link"}
        >
          Roadmap
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => isActive ? "link active-link" : "link"}
        >
          Team
        </NavLink>
        <NavLink
            to="/partners"
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
            Partners
            </NavLink>

        <NavLink
          to="/community"
          className={({ isActive }) => isActive ? "link active-link" : "link"}
        >
          Community
        </NavLink>
    
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleDrawer}
        className="hamburger-btn"
        aria-expanded={isDrawerOpen}
      >
        ☰
      </button>

      {/* Drawer Menu for Mobile */}
      {isDrawerOpen && (
        <div className="drawer">
          {/* Close Button */}
          <button onClick={toggleDrawer} className="close-btn">
            ✖
          </button>

          {/* Navigation Links in Drawer */}
          <div className="drawer-links">
     


            <NavLink
              to="/" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
              WONs
            </NavLink>
            <NavLink
              to="/whitepaper" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
              Whitepaper
            </NavLink>
            <NavLink
              to="/roadmap" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
              Roadmap
            </NavLink>
            <NavLink
              to="/crew" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
              Team
            </NavLink>

            <NavLink
            to="/partners" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
            Partners
            </NavLink>
            

            <NavLink
              to="/community" onClick={toggleDrawer}
              className={({ isActive }) => isActive ? "link active-link" : "link"}
            >
              Community
            </NavLink>
         
          </div>


        </div>

      )}
    </nav>
  );
}

export default TopNavbar;
