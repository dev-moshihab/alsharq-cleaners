// Navbar.js
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img
            src="https://i.postimg.cc/Bb6NpHTv/image.png"
            width="300"
            alt="الشعار"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">الرئيسية</a>
        </li>
        <li>
          <a href="#about">من نحن</a>
        </li>
        <li>
          <a href="#products">منتجاتنا</a>
        </li>
        <li>
          <a href="#contact">اتصل بنا</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
