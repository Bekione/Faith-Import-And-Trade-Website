"use client";

import { mokoto } from "@utils/font/font";
import SliderButton from "./SliderButton";
import { HomeSliderData } from "./HomeSliderData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export default function HomeSlider() {
  return (
    <div className="home_slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={false}
        modules={[Pagination, Autoplay, Keyboard]}
        className="w-full h-[78vh]"
      >
        {HomeSliderData.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              style={{ backgroundImage: `url(${data.bgImgPath})` }}
              className="relative !h-[90%] bg-secondary pt-[150px] bg-no-repeat bg-center bg-cover"
            >
              <div className="absolute right-0 -bottom-10 w-[300px] sm:w-[380px] md:w-[450px] h-16 md:h-20 z-[15] overflow-hidden ">
                <div className="absolute -right-[30px] top-0 w-full h-full bg-primary border-l-8 border-secondary transform -skew-x-[20deg] origin-left z-[15]"></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pl-[30px] text-white text-base font-light italic !text-md sm:!text-lg md:!text-xl z-[16]">
                  {data.slogan
                    ? data.slogan
                    : "Trust, Excellence, Global Reach"}
                </p>
              </div>
              <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
                <svg
                  width="350"
                  height="456"
                  viewBox="0 0 450 556"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="277"
                    cy="63"
                    r="225"
                    fill="url(#paint0_linear_25:217)"
                  />
                  <circle
                    cx="17.9997"
                    cy="182"
                    r="18"
                    fill="url(#paint1_radial_25:217)"
                  />
                  <circle
                    cx="76.9997"
                    cy="288"
                    r="34"
                    fill="url(#paint2_radial_25:217)"
                  />
                  <circle
                    cx="325.486"
                    cy="302.87"
                    r="180"
                    transform="rotate(-37.6852 325.486 302.87)"
                    fill="url(#paint3_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="184.521"
                    cy="315.521"
                    r="132.862"
                    transform="rotate(114.874 184.521 315.521)"
                    stroke="url(#paint4_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="356"
                    cy="290"
                    r="179.5"
                    transform="rotate(-30 356 290)"
                    stroke="url(#paint5_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="191.659"
                    cy="302.659"
                    r="133.362"
                    transform="rotate(133.319 191.659 302.659)"
                    fill="url(#paint6_linear_25:217)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25:217"
                      x1="-54.5003"
                      y1="-178"
                      x2="222"
                      y2="288"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#151F34" />
                      <stop offset="1" stopColor="#151F34" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient
                      id="paint1_radial_25:217"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                    >
                      <stop
                        offset="0.145833"
                        stopColor="#151F34"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="#151F34" stopOpacity="0.08" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_25:217"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                    >
                      <stop
                        offset="0.145833"
                        stopColor="#151F34"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="#151F34" stopOpacity="0.08" />
                    </radialGradient>
                    <linearGradient
                      id="paint3_linear_25:217"
                      x1="226.775"
                      y1="-66.1548"
                      x2="292.157"
                      y2="351.421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#151F34" />
                      <stop offset="1" stopColor="#151F34" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_25:217"
                      x1="184.521"
                      y1="182.159"
                      x2="184.521"
                      y2="448.882"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#151F34" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_25:217"
                      x1="356"
                      y1="110"
                      x2="356"
                      y2="470"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#151F34" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_25:217"
                      x1="118.524"
                      y1="29.2497"
                      x2="166.965"
                      y2="338.63"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#151F34" />
                      <stop offset="1" stopColor="#151F34" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute top-[20%] md:top-1/2 transform md:-translate-y-1/2 w-[85%] md:h-[320px] md:w-8/12 lg:w-7/12 pt-20 px-5 md:px-10 flex flex-col">
                <div className="w-full">
                  <h2
                    className={`${mokoto.className} slider_title mb-4 text-primary text-[1.9rem] font-bold !leading-tight sm:text-4xl md:text-[45px] xl:text-[50px]`}
                  >
                    {data.title}{" "}
                  </h2>
                  <p className="md:px-4 text-justify text-base font-normal leading-[1.5] text-white sm:text-lg sm:leading-[1.5] line-clamp-3">
                    {data.bodyText}
                  </p>
                </div>
                <div className="flex-1"></div>
                <div className="mt-4 flex md:justify-end">
                  <SliderButton
                    text={data.btnText ? data.btnText : "See more"}
                    path={data.actionPath}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
