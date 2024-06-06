"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid } from "swiper/modules";
import { Navigation } from "swiper/modules";
const boxesInfo = [
  {
    title: "KDV Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Cari Hesap Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Ciro Nedir ?",
    src: "loremipsum",
  },
  {
    title: "İskonto Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Matrah Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Stopaj Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Vekaletname Nedir ?",
    src: "loremipsum",
  },
  {
    title: "Vergi Yükümlüsü Kimlerdir ?",
    src: "loremipsum",
  },
];

const Boxes = () => {
  return (
    <div className="container  sm:mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Grid, Navigation]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: {
              rows: 1,
            },
          },
          500: {
            slidesPerView: 2,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 4,
            grid: {
              rows: 1,
            },
          },
          2000: {
            slidesPerView: 6,
            grid: {
              rows: 1,
            },
          },
        }}
        className="w-full h-[200px] "
      >
        {boxesInfo.map((box, index) => (
          <SwiperSlide className="!mt-5" key={index}>
            <div
              className={`${
                index % 2 === 0 ? "bg-myred/85" : "bg-myblue/85"
              } h-full w-full rounded-lg flex justify-center items-center text-white`}
            >
              <p>{box.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Boxes;
