import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log("from login form", response);
      if (response.ok) {
        alert("Login success", user);

        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid credentials");

        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>for png image</div>
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
        <h1 style={{ marginBottom: "20px" }}>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "20px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <br />

          <button
            type="submit"
            style={{
              padding: "10px",
              background: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
