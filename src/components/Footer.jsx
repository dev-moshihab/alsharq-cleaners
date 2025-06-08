import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#products">منتجاتنا</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>معلومات التواصل</h3>
          <p>📍 الباب - ريف حلب الشمالي</p>
          <p>📞 0999 999 999</p>
          <p>✉️ info@alsharq-cleaners.com</p>
        </div>
        <div className="footer-section">
          <h3>تابعنا</h3>
          <div className="social-icons">
            <a href="#"><i>🌐</i></a>
            <a href="#"><i>📘</i></a>
            <a href="#"><i>📸</i></a>
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
