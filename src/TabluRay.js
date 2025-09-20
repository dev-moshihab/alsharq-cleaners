import "./TabluRay.css";

export default function TabluRay() {
  return (
    <div className="page-container">
      <div className="product-box">
        <span className="badge-new">جديد</span>

        <div className="product-image-section">
          <img
            className="product-image"
            src="https://res.cloudinary.com/dbh3tvotn/image/upload/v1749662837/IMG_20250611_154057_1_lu9smz.png"
            alt="تابلو راي"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">تابلو راي - منظف ملمع ومعطر</h1>
          <p className="product-description">
            منتج احترافي لتنظيف وتلميع تابلو السيارة وجميع الأجزاء البلاستيكية.
            يمنح لمعانًا فائقًا مع رائحة منعشة تدوم طويلاً، ويُستخدم بسهولة دون
            ترك أي أثر.
          </p>
          <ul className="features-list">
            <li>مناسب لجميع أنواع السيارات</li>
            <li>يحافظ على لمعان الأسطح</li>
            <li>لا يترك أثرًا دهنيًا</li>
            <li>رائحة عطرية قوية ومنعشة</li>
          </ul>
          <a
            href="https://wa.me/+963947519598"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            اطلب الآن عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
