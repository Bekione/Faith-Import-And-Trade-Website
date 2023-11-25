import React from "react";
import Image from "next/image";

const ServiceHero = ({ Intro, imgPath, imgAlt }) => {
  return (
    <div className="w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-5 px-10 mt-8">
      <div className="flex-1">
        <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
          {typeof Intro === "string" ? Intro : React.createElement(Intro)}
        </p>
      </div>
      <div className="max-w-[85%] w-fit md:w-[350px] lg:[400px] xl:w-[450px]">
        <Image
          src={imgPath}
          width={450}
          height={270}
          alt={imgAlt}
          className="w-full object-contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default ServiceHero;
