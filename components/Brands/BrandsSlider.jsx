"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brandsData } from "./BrandsData";

import "swiper/css";

const BrandsSlider = () => {
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
    <div className="brands_slider w-full my-16 ">
      <div className="mb-6 text-3xl font-extrabold capitalize">
        <h1 className="bg-clip-text w-fit mx-auto text-transparent bg-gradient-to-r from-primary to-secondary">
          Featured Brands
        </h1>
      </div>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        speed={5000}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-fit"
      >
        {brandsData.map((brand) => {
          return (
            <SwiperSlide
              key={brand.id}
              className="min-w-[140px] !h-[100px] mb-12 bg-white rounded-lg shadow-lg"
            >
              <div
                className="relative w-full h-full p-2 py-4 filter grayscale brightness-1/2 hover:filter-none transition duration-300"
                title={brand.title}
              >
                <Image
                  src={brand.path}
                  alt={brand.title}
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

export default BrandsSlider;
