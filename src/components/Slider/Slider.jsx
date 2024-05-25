"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

const Images = [
  {
    src: "/image1.jpg",
    alt: "Slide 1",
  },
  {
    src: "/image2.jpg",
    alt: "Slide 2",
  },
  {
    src: "/image3.jpg",
    alt: "Slide 3",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "!bg-myred !opacity-100",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full"
      >
        {Images.map((image, index) => (
          <SwiperSlide
            className="text-center flex justify-center items-center w-full h-full "
            key={index}
          >
            <Image src={image.src} alt={image.alt} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
