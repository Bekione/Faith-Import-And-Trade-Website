import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";


const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Our Services"
        imgPath="/images/contact/bg-contact.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "computer"]} classes="pr-16" />
        <div className="w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-5 px-10 mt-8">
          <div className="flex-1">
            <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
              Our services
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default page;
