/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import "./slider.scss";
import { useState } from "react";

function Slider() {
  return (
    <>
      <div className="slider">
        <div className="sliderContainer">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide> </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
