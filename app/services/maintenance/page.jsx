import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceHero from "../ServiceHero";
import Maintenance from "@components/Services/Maintenance";
import PageIntro from './PageIntro'
const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Maintenance"
        imgPath="/images/pages-head/bg-maintenance.avif" 
        classes="bg-[url('/images/pages-head/bg-maintenance.avif')]"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "maintenance"]} classes="pr-16" />
        <ServiceHero
          Intro={PageIntro}
          imgPath="/images/maintenance/maintenance-hero.png"
          imgAlt="Disassembled laptop parts"
        />
        <Maintenance />
      </div>
    </section>
  );
};

export default page;
