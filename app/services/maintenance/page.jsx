import Image from "next/image";
import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import Maintenance from "@components/Services/Maintenance";

const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Maintenance"
        imgPath="/images/pages-head/bg-maintenance.avif"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "maintenance"]} classes="pr-16" />
        <div className="w-full flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-5 px-10 mt-8">
          <div className="flex-1">
            <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
              Welcome to our Maintenance Services page. At Faith import & trade,
              we understand the importance of keeping your electronic devices in
              optimal condition for seamless performance and longevity. Whether
              you've purchased a desktop, laptop, printer, or any other
              electronic machine from us, we are committed to providing you with
              top-notch maintenance services. With a team of skilled technicians
              and a dedication to customer satisfaction, we offer both &nbsp;
              <a
                href="#preventive-maintenance"
                className="font-bold text-secondary"
              >
                preventive
              </a>{" "}
              and{" "}
              <a
                href="#curative-maintenance"
                className="font-bold text-secondary"
              >
                curative
              </a>{" "}
              maintenance solutions. Our goal is to ensure that your devices
              operate smoothly and efficiently, allowing you to focus on what
              matters most. Read on to learn more about our comprehensive
              maintenance offerings and how we can help you get the most out of
              your technology investment.
            </p>
          </div>
          <div className="max-w-[85%] w-fit md:w-[350px] lg:[400px] xl:w-[450px]">
            <Image
              src="/images/maintenance/maintenance-hero.png"
              width={450}
              height={270}
              alt="Technicial under maintenance"
              className="w-full object-contain"
            />
          </div>
        </div>
        <Maintenance />
      </div>
    </section>
  );
};

export default page;
