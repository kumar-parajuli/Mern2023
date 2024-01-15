import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "#333",

    color: "#c9c2c2",
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
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  };

  const activeStyle = {
    background: "#555",
  };

  return (
    <header>
      <div style={navStyle}>
        <div>
          <NavLink to="/" style={logoStyle}>
            Kumar Dev
          </NavLink>
        </div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
            <li>
              <NavLink to="/" style={navLinkStyle} activeStyle={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={navLinkStyle}
                activeStyle={activeStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={navLinkStyle}
                activeStyle={activeStyle}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                style={navLinkStyle}
                activeStyle={activeStyle}>
                Service
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink
                  to="/logout"
                  style={navLinkStyle}
                  activeStyle={activeStyle}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    style={navLinkStyle}
                    activeStyle={activeStyle}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    style={navLinkStyle}
                    activeStyle={activeStyle}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
