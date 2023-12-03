import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import Contact from "@components/Contact";

export const metadata = {
  title: "Faith | Contact Us",
  description: "Faith Import And Trade: We are always ready to serve you, don't hesitate to contact us for any needs.",
};

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Contact Us"
        classes="bg-[url('/images/pages-head/bg-contact.webp')]"
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
