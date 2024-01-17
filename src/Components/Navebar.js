import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navebar.css";
const Navbar = () => {
  const { isLoggedIn } = useAuth();

  

  const activeStyle = {
    background: "#555",
  };

  return (
    
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Kumar Technical</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeStyle={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={activeStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={activeStyle}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeStyle={activeStyle}>
                Service
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" activeStyle={activeStyle}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" activeStyle={activeStyle}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeStyle={activeStyle}>
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
