"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { customersData } from "./CustomersData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomersSlider = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="customers_slider w-full px-0 sm:px-4 md:px-8">
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        centeredSlides={false}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-fit"
        style={{
          "--swiper-pagination-color": "#04AA82",
          "--swiper-pagination-bullet-inactive-color": "#151f34",
          "--swiper-pagination-bullet-inactive-opacity": ".35",
          "--swiper-pagination-size": "7px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {customersData.map((customer) => {
          return (
            <SwiperSlide
              key={customer.id}
              className="min-w-[140px] !h-[100px] !p-2 mb-16 bg-white rounded-lg shadow-lg"
            >
              <div
                className="relative w-full h-full p-2 py-4"
                title={customer.title}
              >
                <Image
                  src={customer.path}
                  alt={customer.title}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomersSlider;
