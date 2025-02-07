import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OrderPlacement from "./pages/OrderPlacement";
import AdminDashboard from "./pages/AdminDashboard";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPlacement />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/About-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
