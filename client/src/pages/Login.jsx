import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {

        // ✅ IMPORTANT FIX (STORE TOKEN)
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        console.log("TOKEN:", data.token); // debug
        console.log("Logged in user role:", data.user.role);

        alert("Login Successful 🎉");

        if (data.user.role?.toLowerCase() === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Interview Platform</h1>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;