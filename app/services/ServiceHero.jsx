import React from "react";
import Image from "next/image";

const ServiceHero = ({ Intro, imgPath, imgAlt, w, h }) => {
  return (
    <>
      <div className="relative w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-8 mdgap-5 px-10 mt-8">
        <div className="flex-1">
          <p className="relative mb-5 text-justify text-base font-normal leading-[1.5] text-primary/70 sm:text-lg sm:leading-[1.5]">
            {typeof Intro === "string" ? Intro : React.createElement(Intro)}
            <span className="absolute -top-8 -left-4 block w-48 h-1 bg-gradient-to-r from-secondary to-primary transform skew-x-[40deg] transform-origin-left "></span>
          </p>
        </div>
        <div className="max-w-[85%] w-fit md:w-[350px] lg:[400px] xl:w-[450px]">
          <Image
            src={imgPath}
            width={w ? w : 450}
            height={h ? h : 270}
            alt={imgAlt}
            className={`${w ? "mx-auto" : "w-full"} object-contain`}
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceHero;
