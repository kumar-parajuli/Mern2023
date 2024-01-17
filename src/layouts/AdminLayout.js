import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Admin Dasboard</NavLink>
          </div>
        </div>
      </header>
      <nav className="side-menu">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/admin/users" className="users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts" className="contacts">
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/services" className="services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="home">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;
