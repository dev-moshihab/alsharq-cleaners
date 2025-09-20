import React, { useState, useEffect, useRef } from "react";
import "./AhlaJaw.css";
import HeroSlider2 from "./HeroSlider2" ;



export default function AhlaJaw() {
  return (
    <div className="page-container">
       
      <div className="product-box">
        <HeroSlider2 />
        <span className="badge-new">جديد</span>
        

        {/* معلومات المنتج */}
        <div className="product-info-section">
         
          <h1 className="product-title">
            أحلى جو – معطر الجو الفاخر بروائح منعشة ومتنوعة
          </h1>
          <p className="product-description">
            امنح مكانك لمسة من النقاء والانتعاش مع
            <span className="font-bold"> أحلى جو </span>
            ، المعطر الذي يجمع باقة من الروائح المختارة بعناية لتناسب كل الأذواق
            والمناسبات.
          </p>
          <ul className="features-list">
            <li>ثبات يدوم لساعات طويلة</li>
            <li>تركيبة آمنة وفعّالة على الفور</li>
            <li>مثالي للاستخدام في أي وقت وأي مكان</li>
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
