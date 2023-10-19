"use client";

import { useState, useEffect, useRef } from "react";
import { HomeSliderData } from "./HomeSliderData";
import HomeServicesLogo from "./HomeServicesLogo";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeServices = () => {
  const logoRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTransitionStart = (swiper) => {
    setCurrentSlide(swiper.realIndex);

    if (logoRef.current) {
      let animationClass = "";

      if (swiper.realIndex === 0 && swiper.previousRealIndex === 2) {
        animationClass = "animate-spin-neg";
      } else if (swiper.realIndex === 2 && swiper.previousRealIndex === 0) {
        animationClass = "animate-spin-pos";
      } else if (swiper.realIndex > swiper.previousRealIndex) {
        animationClass = "animate-spin-neg";
      } else if (swiper.realIndex < swiper.previousRealIndex) {
        animationClass = "animate-spin-pos";
      }

      if (animationClass !== "") {
        logoRef.current.classList.add(animationClass);
        setTimeout(() => {
          logoRef.current.classList.remove(animationClass);
        }, 1500);
      }
    }
  };

  return (
    <section className="home_services my-8 w-11/12 min-h-[450px] h-[450px] mx-auto flex flex-col justify-center">
      <div className="text-4xl font-extrabold text-center mb-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Services
        </span>
      </div>
      <div
        className="rounded-xl my-[35rem] w-10/12 lg:w-9/12 h-fit min-h-[360px] mx-auto flex flex-col md:flex-row justify-center items-center gap-5"
        style={{ boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)" }}
        onWheel={(e) => e.preventDefault()}
      >
        <div
          className={`relative bg-primary rounded-xl md:ml-[-11%] mt-[-11%] md:mt-0 !h-[300px] md:h-[75%] w-[75%] max-w-[300px] md:w-[300px]`}
          style={{
            boxShadow: "4px 13px 30px 1px rgba(4, 169, 114, 0.2)",
          }}
        >
          {HomeSliderData.map((data, index) => {
            if (index === 0) return null;

            return (
              <Image
                key={data.id}
                src={data.bgImgPath}
                layout="fill"
                className={`absolute inset-0 rounded-xl transition-opacity duration-[1500ms] ease-in-out ${
                  currentSlide === index - 1
                    ? "opacity-100 z-[8]"
                    : "opacity-0 z-0"
                }`}
                objectFit="cover"
                objectPosition="center"
                alt={data.title}
              />
            );
          })}

          <div
            className="absolute inset-0 rounded-xl opacity-80 z-[9]"
            style={{
              backgroundImage:
                "linear-gradient(147deg, #0db280d8 0%, #151f34e5 74%)",
            }}
          ></div>
          <div
            ref={logoRef}
            className={`absolute bottom-[-35px] right-[-50px] w-[140px] h-[140px] z-[10] transform transition-transform duration-[1500ms] ease-in-out`}
          >
            <HomeServicesLogo />
          </div>
        </div>
        <Swiper
          className="outline h-full w-[78%] mt-[250px] md:mt-0 md:!mx-0 md:!ml-auto"
          direction={"vertical"}
          spaceBetween={50}
          slidesPerView={1}
          speed={1500}
          loop={true}
          effect={"fade"}
          mousewheel={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Mousewheel]}
          onTransitionStart={handleTransitionStart}
          style={{
            "--swiper-pagination-color": "#04AA82",
            "--swiper-pagination-bullet-inactive-color": "#151f34",
            "--swiper-pagination-bullet-inactive-opacity": ".35",
            "--swiper-pagination-size": "7px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bullet-vertical-gap": "6px",
          }}
        >
          {HomeSliderData.map((data, index) => {
            if (index === 0) return null;
            return (
              <SwiperSlide key={data.id} className="w-[92%] h-full p-4">
                <div className="mr-10 mt-5 flex flex-col my-auto">
                  <h3 className="mb-5 text-primary font-bold text-2xl">
                    {data.title}
                  </h3>
                  <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
                    {data.bodyText}
                  </p>
                  <Link
                    href="#"
                    className="block w-fit mt-8 px-6 py-4 rounded-xl font-bold text-white bg-secondary hover:bg-primary transition duration-500"
                    style={{
                      boxShadow: "3px 10px 20px 1px rgba(4, 169, 114, 0.2)",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeServices;
