import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@components/Common/SectionTitle";

const HomeAboutUs = () => {
  return (
    <div className="my-5 md:mt-12 md:mb-16">
      <SectionTitle title="About us" />
      <div className="-mt-4 md:mt-0 h-fit max-h-90 w-11/12 md:w-10/12 mx-auto flex  flex-col flex-col-reverse md:flex-row items-center justify-center gap-5">
        <div className="flex-1 max-w-7/12 mx-auto p-4">
          <p className="text-justify line-clamp-6 text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
            aith Import and Trade: Where Trust, Excellence, and Global Reach
            Meet. Welcome to a world of IT solutions, stationary, and
            maintenance services provided by Faith Import and Trade. As a
            leading company in the industry, Faith is dedicated to delivering
            reliable and top-quality products and services to meet your diverse
            needs. Established in April 2011 as a sister company of "E T A
            Computer & Related Equipment Importer," Faith Import and Trade has
            been a trusted name in the market. Located in Addis Ababa, we have
            been serving the nation with a wide range of offerings. From
            computers, accessories, and stationeries to curative and preventive
            maintenance services, we are your one-stop solution provider.
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
        <div className="relative mx-auto w-[15rem] h-[15rem] md-w-full md:min-w-5/12  bg-secondary rounded-md overflow-hidden">
          <Image
            src="/images/blog/post-03.jpg"
            fill
            alt="something nice"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
