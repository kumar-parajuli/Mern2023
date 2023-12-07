import React, { useState } from "react";

const URL = "http://localhost:5000/api/auth/register";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

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
    console.log(user);
    alert("form submit success", user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({ username: "", email: "", phone: "", password: "" });
      }
    } catch (error) {
      console.error("register", error);
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
        <h1 style={{ marginBottom: "20px" }}>Signup Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            required
            autoComplete="off"
            value={user.username}
            // onChange={handleInput}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
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

          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Phone"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}
            // onChange={(e) => setUser({ ...user, phone: e.target.value })}
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

export default Register;
