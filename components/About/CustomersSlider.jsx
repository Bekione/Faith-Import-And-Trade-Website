"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { customersList } from "./CustomersList";

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
    <div className="customers_slider mt-20 w-full px-6">
      <div className="mb-8">
        <h3 className="text-secondary text-center font-bold text[1.2em] md:text-[1.3em]">
          Trust & Worth
        </h3>
        <h2 className="text-primary text-center font-bold text-[1.5em] sm:text-[1.6em] md:text-[1.8em]">
          Our Clients
        </h2>
      </div>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-fit px-4"
        style={{
          "--swiper-pagination-color": "#04AA82",
          "--swiper-pagination-bullet-inactive-color": "#151f34",
          "--swiper-pagination-bullet-inactive-opacity": ".35",
          "--swiper-pagination-size": "7px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-active-width": "18px", // Set the width of the active bullet
    "--swiper-pagination-bullet-active-height": "10px", // Set the height of the active bullet
        }}
      >
        {customersList.map((customer) => {
          return (
            <SwiperSlide
              key={customer.id}
              className="min-w-[140px] !h-[100px] !p-2 mb-16 bg-white rounded-lg shadow-lg"
            >
              <div className="relative w-full h-full p-2 py-4">
                <Image
                  src={customer.path}
                  alt={customer.alt}
                  layout="fill"
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
