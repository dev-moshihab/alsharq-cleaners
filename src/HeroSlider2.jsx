import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroSlider2.css";

const slides = [
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758185520/Gemini_Generated_Image_vdet31vdet31vdet_1_d3mkhl.png",
  },
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758186175/Gemini_Generated_Image_x7qp31x7qp31x7qp_hothto.png",
  },
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758187208/Gemini_Generated_Image_sx043nsx043nsx04_jloafw.png",
  },
  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758188151/Gemini_Generated_Image_kjnk4akjnk4akjnk_ktwi6p.png",
  },

  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758190715/Gemini_Generated_Image_dr348ndr348ndr34_oxoqmx.png",
  },

  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758190767/Gemini_Generated_Image_9igzts9igzts9igz_wudqht.png",
  },

  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758189266/Gemini_Generated_Image_t8fvdjt8fvdjt8fv_lo4qlb.png",
  },

  {
    bg: "https://res.cloudinary.com/dbh3tvotn/image/upload/v1758189984/Gemini_Generated_Image_uibn02uibn02uibn_ui35pw.png",
  },
];

function HeroSlider2() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      loop
      className="heroSwiper2"
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div
            className="hero-slide2"
            style={{ backgroundImage: `url('${s.bg}')` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider2;
