import { mokoto } from "@utils/font/font";
import { servicesData } from "./servicesData";
import PrimaryButton from "@components/Common/PrimaryButton";

const SingleService = ({ title, text, pageUrl, ctx, classes }) => {
  return (
    <div
      className={`relative h-screen flex items-center ${classes} bg-no-repeat bg-cover mdPlus:bg-contain ${
        ctx !== "stationery" ? "bg-right bg-contain" : ""
      }`}
    >
      {ctx && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            ctx !== "stationery"
              ? "from-[rgba(0,0,0,0)]  via-secondary/20 to-secondary"
              : "from-primary  via-primary/20 "
          } z-[-1]`}
        ></div>
      )}
      <div
        className={`w-10/12 sm:w-9/12 md:w-6/12 mx-auto mdPlus:mx-none ${
          ctx === "stationery" ? "md:ml-auto md:mr-16 " : "md:ml-16"
        } p-4 rounded-lg bg-white/30 backdrop-blur-sm mdPlus:bg-white/0 mdPlus:backdrop-blur-none`}
      >
        <h2
          className={`${mokoto.className} text-4xl text-secondary md:text-primary font-bold mb-6 tracking-wider`}
        >
          {title}
        </h2>
        <p className="text-justify text-base font-normal leading-[1.5] text-primary/90 md:text-body-dark sm:text-lg sm:leading-[1.5]">
          {text}
        </p>
        {pageUrl && (
          <PrimaryButton path={pageUrl} text="See More" classes="!px-12" />
        )}
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="mt-12">
      {servicesData.map(({ id, ...service }) => (
        <SingleService key={id} {...service} />
      ))}
    </div>
  );
};

export default index;
