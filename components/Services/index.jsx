import Link from "next/link";
import Image from "next/image";
import { mokoto } from "@utils/font/font";

const index = () => {
  return (
    <div>
      <div className="relative h-screen flex items-center bg-[url('/images/services/computer.png')] bg-no-repeat bg-contain bg-right">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0)]  via-secondary/20 to-secondary z-[-1]"></div>
        <div className="w-6/12 ml-16 p-4">
          <h2
            className={`${mokoto.className} text-4xl text-primary font-bold mb-6 tracking-wider`}
          >
            Computer & Accessories
          </h2>
          <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
            Discover our wide range of computer solutions and equipment designed
            to meet your technology needs. We offer top-quality computers and
            laptops from leading brands like HP, Toshiba, IBM, Dell, and more.
            Experience the latest in technology with our comprehensive computer
            and accessories solutions.
          </p>
          <Link
            href="/services/computer"
            className="block w-fit rounded-md relative inline-flex group items-center justify-center mt-8 px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-secondary to-primary border-primary overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
            <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
              See more
            </span>
          </Link>
        </div>
      </div>
      <div className="relative h-screen flex items-center bg-[url('/images/services/stationery.webp')] bg-no-repeat bg-contain bg-left">
        <div className="absolute inset-0 bg-gradient-to-r from-primary  via-primary/20 to- z-[-1]"></div>
        <div className="w-6/12 ml-auto mr-16 p-4">
          <h2
            className={`${mokoto.className} text-4xl text-primary font-bold mb-6 tracking-wider`}
          >
            Stationery Supplies
          </h2>
          <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
            Explore a wide range of essential items to enhance your productivity
            and creativity. From writing instruments to desk organization
            solutions, our curated selection has everything you need to stay
            organized and inspired.
          </p>
          <Link
            href="/services/stationery"
            className="block w-fit rounded-md relative inline-flex group items-center justify-center mt-8 px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-secondary to-primary border-primary overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
            <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
              See more
            </span>
          </Link>
        </div>
      </div>
      <div className="relative h-screen flex items-center bg-[url('/images/services/maintenance.png')] bg-no-repeat bg-right">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0)]  via-secondary/20 to-secondary z-[-1]"></div>
        <div className="w-6/12 ml-16 p-4">
          <h2
            className={`${mokoto.className} text-4xl text-primary font-bold mb-6 tracking-wider`}
          >
            Maintenance
          </h2>
          <p className="text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
            At Faith import & trade, we understand the importance of keeping
            your electronic devices in optimal condition for seamless
            performance and longevity. Whether you've purchased a desktop,
            laptop, printer, or any other electronic machine from us, we are
            committed to providing you with top-notch preventive and curative
            maintenance services.
          </p>
          <Link
            href="/services/maintenance"
            className="block w-fit rounded-md relative inline-flex group items-center justify-center mt-8 px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-secondary to-primary border-primary overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
            <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
              See more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
