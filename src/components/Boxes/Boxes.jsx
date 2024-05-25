"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

const boxesInfo = [
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
  {
    title: "Lorem, ipsum dolor.",
    src: "loremipsum",
  },
];

const Boxes = () => {
  return (
    <div className="container  sm:mx-auto">
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="w-full h-full"
      >
        {boxesInfo.map((box, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-300">
              <p>{box.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Boxes;
