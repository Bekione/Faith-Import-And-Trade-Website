import { mokoto } from "@utils/font/font";
import { manifestoData } from "./ManifestoData";
import SingleManifesto from "./SingleManifesto";
import Image from "next/image";

const HomeManifesto = () => {
  return (
    <section className="w-full px-10 sm:px-0 pb-12 pt-12 sm:pb-0 mt-20 flex flex-col sm:flex-row  bg-primary">
      <div
        className="sm:w-1/2 self-start flex items-center justify-center flex-col top-[110px] sm:top-[98.03px] sm:sticky"
        style={{ minHeight: "calc(100vh - 98.03px)" }}
      >
        <div className="sm:max-w-[80%] -mt-5 flex flex-col items-center justify-center">
          <figure className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 text-secondary">
            <Image
              src="/images/logo/icon-logo.svg"
              alt="Faith Import And Trade Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </figure>
          <h2
            className={`${mokoto.className} text-center my-4 text-secondary tracking-widest uppercase text-[1.5rem] font-bold leading-relaxed sm:text-2xl md:text-[30px] xl:text-[35px]`}
          >
            Faith import & trade
          </h2>
          <p className="text-center text-base font-normal leading-[1.5] text-white sm:text-lg sm:leading-[1.5]">
            Your Source for Quality IT Solutions, Stationary, and Maintenance
            Services. We embody our company slogan of Trust, Excellence, and
            Global Reach.
          </p>
        </div>
      </div>

      <article className="sm:w-1/2 ">
        {manifestoData.map((manifesto) => (
          <SingleManifesto key={manifesto.id} manifesto={manifesto} />
        ))}
      </article>
    </section>
  );
};

export default HomeManifesto;
