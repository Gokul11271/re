import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import saree1 from "../assets/saree1.jpg";
import saree2 from "../assets/saree2.jpg";
import saree3 from "../assets/saree3.jpg";
import random from "../assets/random.avif";
import happy from "../assets/happy.jpg";

const images = [saree1, saree2, saree3, random, happy];

const CoverflowSlider = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        direction="rtl"
        mousewheel={{ forceToAxis: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Mousewheel]}
        className="w-[90%] max-w-[1000px] py-12"
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowSlider;
