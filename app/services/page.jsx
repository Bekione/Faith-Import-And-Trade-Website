import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceHero from "./ServiceHero";
import Services from "@components/Services";

const page = () => {
  const introText =
    "Welcome to Faith Import and Trade, where we bring you a wide range of professional services designed to meet your diverse needs. With a steadfast commitment to excellence, we strive to provide exceptional solutions that enhance your business operations and elevate your success. Our comprehensive service offerings encompass various areas, including computers, stationery supplies, and maintenance services. At Faith Import and Trade, we combine expertise, reliability, and a customer-centric approach to deliver tailored solutions that drive efficiency and productivity. Explore our services below and discover how we can help you achieve your business goals.";
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Our Services"
        imgPath="/images/contact/bg-contact.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "computer"]} classes="pr-16" />
        <ServiceHero
          Intro={introText}
          imgPath="/images/services/services-hero.png"
          imgAlt="Assembling Jigsaw pieces indicating fulfilling customer needs"
          w="405"
          h="243"
        />

        <Services />
      </div>
    </section>
  );
};

export default page;
