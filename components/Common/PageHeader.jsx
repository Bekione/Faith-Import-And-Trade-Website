import { mokoto } from "../../utils/font/font";

const PageHeader = ({ title, imgPath }) => {

  return (
    <div className="relative h-[300px] md:h-[500px] w-full p-10 flex items-center justify-center mb-5">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#04AA8210] to-[#151F3490] z-[5]"
        aria-hidden="true"
      />
      <div
        style={{backgroundImage: `url(${imgPath})`}}
        className={`absolute inset-0 bg-no-repeat bg-fixed bg-cover bg-center z-[4]`}
        aria-hidden="true"
      />
      <span className="inline block w-5 lg:w-10 h-2 bg-white mr-5 rounded-[4px] transform -skew-x-[16deg] drop-shadow-xl z-[9]"></span>
      <h1
        className={`${mokoto.className} page-title relative text-white text-base !text-[2rem] lg:!text-[6rem] font-bold tracking-wider z-[9]`}
      >
        {title}
      </h1>
      <span className="inline block w-5 lg:w-10 h-2 bg-white ml-5 rounded-[4px] transform skew-x-[16deg] drop-shadow-xl z-[9]"></span>
    </div>
  );
};

export default PageHeader;
