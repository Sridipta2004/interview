import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/interview" element={<Interview />} />

        <Route path="/result" element={<Result />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
