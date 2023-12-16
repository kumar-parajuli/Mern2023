import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Navebar = () => {
  const { isLoggedIn } = useAuth();
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "#333",
    color: "#fff",
  };

  const logoStyle = {
    marginRight: "2rem",
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#fff",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 1rem",
  };

  return (
    <header>
      <div style={navStyle}>
        <div>
          <NavLink to="/" style={logoStyle}>
            LOGO
          </NavLink>
        </div>
        <nav style={{ display: "flex", justifyContent: "space-end" }}>
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={navLinkStyle}>
            Contact
          </NavLink>
          <NavLink to="/service" style={navLinkStyle}>
            Service
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/logout" style={navLinkStyle}>
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink to="/register" style={navLinkStyle}>
                Register
              </NavLink>
              <NavLink to="/login" style={navLinkStyle}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navebar;
