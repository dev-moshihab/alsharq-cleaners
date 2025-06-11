import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul>
            <li>
              <a href="#home">الرئيسية</a>
            </li>
            <li>
              <Link to="/TabluRay">TabluRay</Link>
            </li>
            <li>
              <Link to="/NewProduct">NewProduct</Link>
            </li>
            <li>
              <a href="#contact">معلومات الاتصال</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>معلومات التواصل</h3>

          <p>
            <FaLocationDot className="icon0" /> سوريا - ريف دمشق{" "}
          </p>
          <p>
            <FaPhoneFlip className="icon0" /> <tel>0947519598</tel>{" "}
          </p>
          <p>
            <MdEmail className="icon0" /> info@alsharq-cleaners.com
          </p>
        </div>
        <div className="footer-section">
          <h3>مطور الموقع الالكتروني</h3>

          <div className="social-icons">
            <div className="developer-icons">
              <a
                href="https://wa.me/963969834067"
                target="_blank"
                rel="noopener noreferrer"
                title="واتساب"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/moshihab123112"
                target="_blank"
                rel="noopener noreferrer"
                title="لينكدإن"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:mo1me12112@gmail.com" title="البريد الإلكتروني">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} شركة الشرق للمنظفات - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}

export default Footer;
