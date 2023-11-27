import Link from "next/link";
import { mokoto } from "@utils/font/font";
import { servicesData } from "./servicesData";

const SingleService = ({ title, text, pageUrl, ctx, classes }) => {
  return (
    <div
      className={`relative h-screen flex items-center ${classes} bg-no-repeat bg-cover mdPlus:bg-contain ${
        ctx !== "stationery" ? "bg-right bg-contain" : ""
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          ctx !== "stationery"
            ? "from-[rgba(0,0,0,0)]  via-secondary/20 to-secondary"
            : "from-primary  via-primary/20 "
        } z-[-1]`}
      ></div>
      <div
        className={`w-10/12 sm:w-9/12 md:w-6/12 ${
          ctx === "stationery" ? "ml-auto mr-16" : "ml-16"
        } p-4`}
      >
        <h2
          className={`${mokoto.className} text-4xl text-primary font-bold mb-6 tracking-wider`}
        >
          {title}
        </h2>
        <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
          {text}
        </p>
        <Link
          href={pageUrl}
          className="block w-fit rounded-md relative inline-flex group items-center justify-center mt-8 px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-secondary to-primary border-primary overflow-hidden"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
          <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
            See more
          </span>
        </Link>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="">
      {servicesData.map(({ id, ...service }) => (
        <SingleService key={id} {...service} />
      ))}
    </div>
  );
};

export default index;
