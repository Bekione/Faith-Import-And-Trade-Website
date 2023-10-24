"use client";

import { useState, useRef } from "react";
import { HomeSliderData } from "./carousel/HomeSliderData";
import HomeServicesLogo from "../Common/FaithLogoIcon";
import SectionTitle from "@components/Common/SectionTitle";
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
      const animationClasses = {
        "0,2": "animate-spin-neg",
        "2,0": "animate-spin-pos",
        ">": "animate-spin-neg",
        "<": "animate-spin-pos",
      };

      const getAnimationClassKey = (current, previous) => {
        if (current === 0 && previous === 2) {
          return "0,2";
        } else if (current === 2 && previous === 0) {
          return "2,0";
        } else if (current > previous) {
          return ">";
        } else if (current < previous) {
          return "<";
        }
      };

      const animationClassKey = getAnimationClassKey(
        swiper.realIndex,
        swiper.previousRealIndex
      );

      let animationClass = animationClasses[animationClassKey];

      // Reverse the logic for smaller screen orientation
      if (window.innerWidth < 768) {
        if (animationClass === "animate-spin-neg") {
          animationClass = "animate-spin-pos";
        } else if (animationClass === "animate-spin-pos") {
          animationClass = "animate-spin-neg";
        }
      }

      if (animationClass !== undefined) {
        logoRef.current.classList.add(animationClass);
        swiper.once("transitionEnd", () => {
          logoRef.current.classList.remove(animationClass);
        });
      }
    }
  };

  const breakpoints = {
    0: {
      direction: "horizontal",
    },
    768: {
      direction: "vertical",
    },
  };

  return (
    <section className="home_services mt-20 w-11/12  h-fit md:h-[430px] lg:h-[400px] xl:h-[380px] mx-auto flex flex-col justify-center">
      <SectionTitle title="Our Services" />
      <div
        className="relative rounded-xl w-10/12 lg:w-9/12 min-h-[450px] md:min-h-fit h-auto md:h-full mx-auto flex flex-col md:flex-row justify-center items-center gap-5"
        style={{ boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)" }}
      >
        <div
          className={`relative bg-primary rounded-xl md:ml-[-11%] mt-[-11%] md:mt-0 h-[180px] sm:h-[200px] md:h-[75%] w-[75%] max-w-[300px] md:w-[300px]`}
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
                fill
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
            className={`absolute bottom-[-35px] right-[-50px] w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] z-[10] transform transition-transform duration-[1500ms] ease-in-out`}
          >
            <HomeServicesLogo />
          </div>
        </div>
        <Swiper
          breakpoints={breakpoints}
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
          className="min-h-[350px] md:min-h-[250px] max-h-fit h-full w-full"
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
              <SwiperSlide
                key={data.id}
                className="w-full md:w-[92%] h-full p-4"
              >
                <div className="md:mr-10 mt-2 sm:mt-4 md:mt-5 flex flex-col my-auto">
                  <h3 className="mb-5 text-primary font-bold text-2xl">
                    {data.title}
                  </h3>
                  <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
                    {data.bodyText}
                  </p>
                  <Link
                    href={data.actionPath}
                    className="block w-fit mt-5 sm:mt-8 px-6 py-4 rounded-xl font-bold text-white bg-secondary hover:bg-primary transition duration-500"
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
