import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceHero from "../ServiceHero";
import Computers from "@components/Services/Computers";

const page = () => {
  const introText =
    "Discover our wide range of computer solutions and equipment designed to meet your technology needs. We offer top-quality computers and laptops from leading brands like HP, Toshiba, IBM, Dell, and more. Enhance your productivity with our selection of monitors and multimedia displays. Find all the essential accessories you need, including cables, outlets, jacks, and racks. We also provide trusted software products from Microsoft, Symantec, and Adobe Systems. From networking equipment to power solutions, office equipment such as printers, copiers, and scanners, we have you covered. Explore our reliable data storage solutions and a variety of consumables like cartridges and toners. Experience the latest in technology with our comprehensive computer and accessories solutions.";
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Computers"
        titleExtra="Accessories"
        imgPath="/images/pages-head/bg-computer.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "computer"]} classes="pr-16" />
        <ServiceHero
          intro={introText}
          imgPath="/images/computers/laptop-mock.png"
          imgAlt="Faith import & trade webpage in a laptop"
        />
        <Computers />
      </div>
    </section>
  );
};

export default page;
