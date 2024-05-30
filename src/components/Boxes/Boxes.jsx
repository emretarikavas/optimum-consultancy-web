"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";

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
        grid={{ rows: 2, fill: "rows" }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Grid]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: {
              rows: 2,
            },
          },
          500: {
            slidesPerView: 2,
            grid: {
              rows: 2,
            },
          },
          1024: {
            slidesPerView: 4,
            grid: {
              rows: 2,
            },
          },
          2000: {
            slidesPerView: 6,
            grid: {
              rows: 3,
            },
          },
        }}
        className="w-full h-[300px] sm:h-[300px]"
      >
        {boxesInfo.map((box, index) => (
          <SwiperSlide className="!mt-5" key={index}>
            <div className="bg-gray-300 h-full w-full rounded-lg flex justify-center items-center">
              <p>{box.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Boxes;
