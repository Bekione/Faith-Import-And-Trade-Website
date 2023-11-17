import Image from "next/image";
import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import Computers from "@components/Services/Computers";
const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Computers"
        titleExtra="Accessories"
        imgPath="/images/pages-head/bg-computer.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "computer"]} classes="pr-16" />
        <div className="w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-5 px-10 mt-8">
          <div className="flex-1">
            <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
              Discover our wide range of computer solutions and equipment
              designed to meet your technology needs. We offer top-quality
              computers and laptops from leading brands like HP, Toshiba, IBM,
              Dell, and more. Enhance your productivity with our selection of
              monitors and multimedia displays. Find all the essential
              accessories you need, including cables, outlets, jacks, and racks.
              We also provide trusted software products from Microsoft,
              Symantec, and Adobe Systems. From networking equipment to power
              solutions, office equipment such as printers, copiers, and
              scanners, we have you covered. Explore our reliable data storage
              solutions and a variety of consumables like cartridges and toners.
              Experience the latest in technology with our comprehensive
              computer and accessories solutions.
            </p>
          </div>
          <div className="max-w-[85%] w-fit md:w-[350px] lg:[400px] xl:w-[450px]">
            <Image
              src="/images/computers/laptop-mock.png"
              width={450}
              height={270}
              alt="Faith import logo in a laptop"
              className="w-full object-contain"
            />
          </div>
        </div>

        <Computers />
      </div>
    </section>
  );
};

export default page;
