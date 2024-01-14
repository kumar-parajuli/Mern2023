import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/auth/register";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("response from server", res_data.extraDetails);
      if (response.ok) {
        storeTokenInLS(res_data.token); //store in localstorage as on argument
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    // <div style={{ textAlign: "center", padding: "20px" }}>
    //   <div style={{ marginBottom: "20px" }}></div>
    //   <div
    //     style={{
    //       maxWidth: "400px",
    //       margin: "auto",
    //       backgroundColor: "#f8f8f8",
    //       padding: "20px",
    //       borderRadius: "8px",
    //       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    //     }}>
    //     <h1 style={{ marginBottom: "20px" }}>Registration Form</h1>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         name="username"
    //         type="text"
    //         id="username"
    //         placeholder="Username"
    //         required
    //         autoComplete="off"
    //         value={user.username}
    //         // onChange={handleInput}
    //         onChange={(e) => setUser({ ...user, username: e.target.value })}
    //         style={{
    //           width: "100%",
    //           padding: "8px",
    //           marginBottom: "10px",
    //           boxSizing: "border-box",
    //           borderRadius: "4px",
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //       <br />

    //       <label htmlFor="email">Email</label>
    //       <input
    //         name="email"
    //         type="text"
    //         id="email"
    //         placeholder="Email"
    //         required
    //         autoComplete="off"
    //         value={user.email}
    //         onChange={handleInput}
    //         // onChange={(e) => setUser({ ...user, email: e.target.value })}
    //         style={{
    //           width: "100%",
    //           padding: "8px",
    //           marginBottom: "10px",
    //           boxSizing: "border-box",
    //           borderRadius: "4px",
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //       <br />

    //       <label htmlFor="phone">Phone</label>
    //       <input
    //         name="phone"
    //         type="text"
    //         id="phone"
    //         placeholder="Phone"
    //         required
    //         autoComplete="off"
    //         value={user.phone}
    //         onChange={handleInput}
    //         // onChange={(e) => setUser({ ...user, phone: e.target.value })}
    //         style={{
    //           width: "100%",
    //           padding: "8px",
    //           marginBottom: "10px",
    //           boxSizing: "border-box",
    //           borderRadius: "4px",
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //       <br />

    //       <label htmlFor="password">Password</label>
    //       <input
    //         name="password"
    //         type="password"
    //         id="password"
    //         placeholder="Password"
    //         required
    //         autoComplete="off"
    //         value={user.password}
    //         onChange={handleInput}
    //         // onChange={(e) => setUser({ ...user, password: e.target.value })}
    //         style={{
    //           width: "100%",
    //           padding: "8px",
    //           marginBottom: "20px",
    //           boxSizing: "border-box",
    //           borderRadius: "4px",
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //       <br />

    //       <button
    //         type="submit"
    //         style={{
    //           padding: "10px",
    //           background: "#4caf50",
    //           color: "#fff",
    //           border: "none",
    //           borderRadius: "4px",
    //           cursor: "pointer",
    //         }}>
    //         Register Now
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
