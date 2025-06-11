// Navbar.js
import "./Navbar.css";
import { FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar glass-navbar">
      <div className="logo">
        <a href="/">
          <img src="https://i.postimg.cc/Bb6NpHTv/image.png" alt="الشعار" />
        </a>
      </div>
      <div className="nav-container">
        <Link to="/" className="nav-link">
          <FaHome className="icon" /> الرئيسية
        </Link>
        <a href="#contact" className="nav-link">
          <FaPhone className="icon" /> معلومات الاتصال
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
