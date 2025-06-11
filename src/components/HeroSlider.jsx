import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroSlider.css";
import { Link } from "react-router-dom";



const slides = [
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1749662943/oliur-ovrOPhu8vSw-unsplash_1_ap3yni.jpg",
    img: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1749663072/IMG_20250611_151215_sipwok.png",
    title: "تابلو-راي",
    subtitle: "سر اللمعان يحيي لون وتفاصيل التابلو، جربه اليوم وشاهد الفرق بنفسك.",
    link: "/TabluRay",
  },
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1749662943/oliur-ovrOPhu8vSw-unsplash_1_ap3yni.jpg",
    img: "",
    title: "منتج جديد",
    subtitle: "عناية فائقة للملابس البيضاء",
    link: "/NewProduct",
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blurActive, setBlurActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurActive(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      loop
      className="heroSwiper"
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
        setBlurActive(false);
      }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className={`hero-slide ${activeIndex === i && blurActive ? "blurred" : ""}`}
            style={{ backgroundImage: `url('${s.bg}')` }}
          >
            <div className="hero-left">
              <div className="hero-circle" />
              <img src={s.img} alt="" className="hero-img" />
            </div>
            <div className="hero-text">
              <h2>{s.title}</h2>
              <p>{s.subtitle}</p>
              <Link to={s.link} className="btn">استعراض</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
