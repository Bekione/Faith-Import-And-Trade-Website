"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { TestimonialsData } from "./TestimonialsData";
import CornerImage from "./CornerImage";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const TestimonialsSlider = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      selector: '[data-fancybox="letter-image"]',
      afterShow: () => {
        const fancyboxContainer = document.querySelector(
          ".fancybox__container"
        );
        fancyboxContainer.style.zIndex = "999999 !important";
      },
      slideShow: {
        autoPlay: true,
        speed: 3000,
      },
    });

    const customStyles = document.createElement("style");
    customStyles.innerHTML = `
      .fancybox__controls {
        opacity: 1 !important;
        pointer-events: auto !important;
        transition: none !important;
      }
    `;

    document.head.appendChild(customStyles);
  }, []);
  return (
    <div className="testimonials_slider w-9/12 2xl:w-8/12 h-[30rem] mx-auto bg-primary/10 backdrop-blur-lg rounded-lg pt-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{
          "--swiper-pagination-color": "#04AA82",
          "--swiper-pagination-bullet-inactive-color": "#151f34",
          "--swiper-pagination-bullet-inactive-opacity": ".35",
          "--swiper-pagination-size": "7px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="w-full h-full px-4 py-12 outline-secondary"
      >
        {TestimonialsData.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="!h-[350px] !w-[250px] mt-4 flex items-center justify-center"
          >
            <div className="group flex items-center justify-center h-full w-full relative bg-secondary/50 ">
              <Image
                src={testimonial.imgPath}
                alt={testimonial.alt}
                // placeholder="blur"
                width={240}
                height={340}
                className="h-full w-full"
              />

              <CornerImage styles="absolute -top-1 -right-1" />

              <CornerImage styles="absolute -top-1 -left-1 transform scale-x-[-1]" />

              <CornerImage styles="absolute -bottom-1 -right-1 transform scale-y-[-1]" />

              <CornerImage styles="absolute -bottom-1 -left-1 transform scale-x-[-1] scale-y-[-1]" />

              <a
                href={testimonial.imgPath}
                data-fancybox="letter-image"
                title={"Fullscreen"}
                className="group/link invisible group-hover:visible block absolute top-1 right-1 py-px px-[2px] rounded-sm bg-primary/10 backdrop-blur-lg hover:bg-secondary"
              >
                <svg
                  viewBox="0.00 0.00 130.00 130.00"
                  className="h-[20px] w-[20px] fill-[#231f20] group-hover/link:fill-white"
                >
                  <path
                    d="
  M 107.98 29.61
  Q 93.57 43.76 79.43 58.19
  C 77.22 60.44 73.13 59.61 71.40 57.05
  C 69.27 53.93 71.06 51.34 73.51 48.90
  Q 87.02 35.49 100.45 21.99
  Q 100.92 21.52 100.25 21.51
  Q 92.04 21.47 76.02 21.54
  C 71.02 21.56 68.66 15.60 72.33 12.31
  Q 73.75 11.04 76.58 11.02
  Q 92.10 10.92 107.65 11.02
  Q 111.43 11.05 113.57 12.34
  C 117.27 14.57 118.95 17.60 118.99 22.17
  Q 119.12 37.87 119.01 53.57
  Q 119.00 55.90 118.13 57.20
  C 115.99 60.42 110.48 60.04 109.07 56.69
  Q 108.44 55.21 108.47 51.22
  Q 108.54 40.52 108.46 29.81
  Q 108.45 29.15 107.98 29.61
  Z"
                  />
                  <path
                    d="
  M 29.82 108.47
  Q 42.29 108.55 54.75 108.48
  C 59.29 108.46 60.84 114.82 57.72 117.66
  Q 56.29 118.96 53.36 118.98
  Q 37.87 119.10 22.37 118.98
  Q 18.56 118.96 16.41 117.66
  C 12.70 115.42 11.04 112.40 11.01 107.83
  Q 10.90 92.00 10.98 76.16
  C 11.03 68.46 21.72 68.82 21.58 76.50
  Q 21.36 88.35 21.59 100.20
  Q 21.60 100.84 22.06 100.39
  Q 36.39 86.15 50.57 71.83
  C 54.17 68.19 60.98 72.22 59.19 77.46
  Q 58.69 78.94 56.61 80.98
  Q 43.02 94.40 29.63 108.00
  Q 29.17 108.46 29.82 108.47
  Z"
                  />
                </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
