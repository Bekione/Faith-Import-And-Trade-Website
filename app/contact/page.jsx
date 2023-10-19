import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import Contact from "@components/Contact";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Contact Us"
        imgPath="/images/contact/bg-contact.avif"
      />

      <div className="container px-5 md:px-10 pt-5 ">
        <Breadcrumb paths={["contact"]} />
        <div className="flex flex-col lg:flex-row gap-10">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default page;
