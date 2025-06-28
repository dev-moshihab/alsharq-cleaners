// Navbar.js
import "./Navbar.css";
import { FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar glass-navbar">
      <div className="logo">
        <a href="/">
          <img src="https://res.cloudinary.com/dbh3tvotn/image/upload/v1749662267/%D8%B4%D8%B1%D9%83%D8%A9_ak03rx.png" alt="الشعار" />
        </a>
      </div>
      <div className="nav-container">
        <Link to="/" className="nav-link">
          <FaHome className="icon" /> <p className="p1">الرئيسية</p>
        </Link>
        <a href="#contact" className="nav-link">
          <FaPhone className="icon" />  <p className="p1">معلومات الاتصال</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
