// Products.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Products.css'; // ستضيف التنسيق لاحقاً

function Products() {
  const products = [
    {
      name: "منظف متعدد الاستخدام",
      description: "ينظف الأسطح المختلفة بكفاءة",
      image: "https://via.placeholder.com/300x400.png?text=منتج+1",
    },
    {
      name: "معطر أرضيات",
      description: "برائحة منعشة وطويلة الأمد",
      image: "https://via.placeholder.com/300x400.png?text=منتج+2",
    },
    {
      name: "مطهر ومعقم",
      description: "لقتل الجراثيم والبكتيريا",
      image: "https://via.placeholder.com/300x400.png?text=منتج+3",
    },
  ];

  return (
    <section id="products" className="products-section">
      <h2 className="section-title">منتجاتنا</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop
      >
        {products.map((prod, idx) => (
          <SwiperSlide key={idx}>
            <div className="product-card">
              <img src={prod.image} alt={prod.name} />
              <div className="product-info">
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Products;
