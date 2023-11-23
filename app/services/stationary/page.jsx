import Image from 'next/image'
import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import Stationary from "@components/Services/Stationary";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Stationary"
        imgPath="/images/pages-head/bg-stationary.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "stationary"]} classes="pr-16" />
        <div className="w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-5 px-10 mt-8">
          <div className="flex-1">
            <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
              Welcome to our Stationery section! Explore a wide range of
              essential items to enhance your productivity and creativity. From
              writing instruments to desk organization solutions, our curated
              selection has everything you need to stay organized and inspired.
              Browse through our categories and find the perfect stationery
              items to make your workspace a reflection of your unique style.
              Enjoy exploring!
            </p>
          </div>
          <div className="max-w-[85%] w-fit md:w-[350px] lg:[400px] xl:w-[450px]">
            <Image
              src="/images/stationery/stationery-hero.png"
              width={450}
              height={270}
              alt="Faith import logo in a laptop"
              className="w-full object-contain"
            />
          </div>
        </div>

        <Stationary />
      </div>
    </section>
  );
};

export default page;
