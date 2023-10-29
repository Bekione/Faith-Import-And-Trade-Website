import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@components/Common/SectionTitle";

const HomeAboutUs = () => {
  return (
    <div className="my-5 md:mt-12 md:pb-16 overflow-hidden">
      <SectionTitle title="About us" />
      <div className="w-full mt-32 md:-mt-4 py-8 bg-[url('/images/about/home-about-textured.png')]">
        <div className="relative mx-auto md:mt-0 h-fit max-h-90  w-11/12 md:w-10/12 mx-auto flex  flex-col flex-col-reverse md:flex-row items-center justify-center md:justify-start gap-5">
          <div className="flex-1 md:flex-0 max-w-9/12 md:max-w-[65%] p-4 z-[1]">
            <p className="text-justify line-clamp-[10] text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5] mix-blend-difference">
              Faith Import and Trade: Where Trust, Excellence, and Global Reach
              meet. Welcome to a world of IT solutions, stationary, and
              maintenance services provided by Faith Import and Trade. As a
              leading company in the industry, Faith is dedicated to delivering
              reliable and top-quality products and services to meet your
              diverse needs. Established in April 2011 as a sister company of "E
              T A Computer & Related Equipment Importer," Faith Import and Trade
              has been a trusted name in the market. Located in Addis Ababa, we
              have been serving the nation with a wide range of offerings. From
              computers, accessories, and stationeries to curative and
              preventive maintenance services, we are your one-stop solution
              provider.
            </p>{" "}
            <Link
              href="/about"
              className="block w-fit mt-5 sm:mt-8 px-6 py-4 rounded-xl font-bold text-white hover:bg-secondary bg-primary transition duration-500"
              style={{
                boxShadow: "3px 10px 20px 1px rgba(4, 169, 114, 0.2)",
              }}
            >
              Read More
            </Link>
          </div>

          <div className="md:absolute z-0 -mt-20 md:mt-0 -bottom-20 right-0 w-[350px] sm:w-[450px] md:w-[500px] flex items-center justify-center">
            <div className="about-image relative w-[65%] h-[150px] sm:w-[75%] sm:h-[280px] md:w-[500px] md:h-[357px] bg-secondary rounded-md overflow-hidden">
              <Image
                src="/images/about/home-about-animated.gif"
                fill
                quality={100}
                alt="Faith animated logo"
                className="object-cover object-bottom object-left"
              />
              {/* <div className="absolute inset-0"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
