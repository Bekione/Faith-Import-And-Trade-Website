import { mokoto } from "../../utils/font/font";

const PageHeader = ({ title, imgPath }) => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full p-10 flex items-center justify-center mb-5">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#ffffff50] to-[#151F34f2] z-[5]"
        aria-hidden="true"
      />
      <div
        style={{ backgroundImage: `url(${imgPath})` }}
        className={`absolute inset-0 bg-no-repeat bg-fixed bg-cover bg-center z-[4]`}
        aria-hidden="true"
      />
      <div className="w-[95%] sm:w-[90%] h-fit mx-auto mt-12 sm:mt-0 flex items-center justify-center gap-5 z-[9]">
        <div className="w-6 lg:w-10 h-1 sm:h-2 bg-white rounded-[4px] transform -skew-x-[16deg] shadow-xl z-[9]"></div>
        <h1
          className={`${mokoto.className} page-title text-white text-base !text-center !text-[2rem] sm:!text-[2.5rem] md:!text-[4.5rem] lg:!text-[6rem] font-bold  tracking-[.25rem] md:tracking-wider leading-normal z-[9]`}
        >
          {title}
        </h1>
        <div className="w-6 lg:w-10 h-1 sm:h-2 bg-white rounded-[4px] transform skew-x-[16deg] shadow-xl z-[9]"></div>
      </div>
    </div>
  );
};

export default PageHeader;
