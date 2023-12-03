import Image from "next/image";

const Warranty = () => {
  return (
    <div className="w-10/12  max-w-[1000px] p-2 md:p-4 py-4 my-12 flex flex-col md:flex-row items-center gap-2 md:gap-5 mx-auto bg-[url('/images/about/home-about-textured.png')] rounded-md shadow-lg">
      <Image
        src="/images/maintenance/warranty.png"
        width={250}
        height={250}
        alt="One year warranty tag"
        quality={100}
        className="w-[180px] h-auto md:w-[200px]"
      />
      <div className="p-2 md:p-4 px-4">
        <p className="text-center md:text-justify text-base font-normal leading-[1.5] text-primary sm:text-lg sm:leading-[1.5]">
          All items purchased from our company come with a one-year guarantee.
          During this period, we provide free maintenance services by our
          skilled technicians.
        </p>
      </div>
    </div>
  );
};

export default Warranty;
