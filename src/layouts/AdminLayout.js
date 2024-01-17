import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./AdminLayout.css";
const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout", user);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container-admin">
          <div className="logo-brand">
            <NavLink to="/">Admin Dasboard</NavLink>
          </div>
        </div>

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
      </header>
    </>
  );
};

export default AdminLayout;
