import Image from "next/image";

const Warranty = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center gap-5 max-w-[1000px] mx-auto bg-[url('/images/about/home-about-textured.png')] rounded-md">
      <Image
        src="/images/maintenance/warranty.png"
        width={250}
        height={250}
        alt="One year warranty tag"
        quality={100}
        className=""
      />
      <div className="p-4">
        <p className="text-justify text-base font-normal leading-[1.5] text-primary sm:text-lg sm:leading-[1.5]">
          All items purchased from our company come with a one-year guarantee.
          During this period, we provide free maintenance services by our
          skilled technicians.
        </p>
      </div>
    </div>
  );
};

export default Warranty;
