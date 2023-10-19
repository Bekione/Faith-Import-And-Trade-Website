import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Stationary"
        imgPath="/images/pages-head/bg-stationary.avif"
      />

      <div className="container px-5 md:px-10 pt-5 ">
        <Breadcrumb paths={["services", "stationary"]} />
        <div className="flex flex-col lg:flex-row gap-10">
          Stationary
        </div>
      </div>
    </section>
  );
};

export default page;
