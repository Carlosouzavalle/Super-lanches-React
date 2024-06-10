import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../css/Banner.css";

export default function Banner({ images }) {
  return (
    <Swiper className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Banner ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}