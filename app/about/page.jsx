import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import AboutDescription from "@components/About/AboutDescription";
import Manifesto from "@components/About/Manifesto";
import Slogan from "@components/About/Slogan";
import AboutCards from "@components/About/AboutCards";
import AboutCustomers from "@components/About/AboutCustomers";

export const metadata = {
  title: "Faith | About Us",
  description: "Faith Import and Trade: Where Trust, Excellence, and Global Reach meet. Welcome to a world of IT solutions, stationary, and maintenance services provided by Faith Import and Trade.",
};
const page = () => {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="About Us"
        classes="bg-[url('/images/pages-head/bg-about.webp')]"
      />

      <div className="container px-5 md:px-10 pt-5 ">
        <Breadcrumb paths={["about"]} />
        <div className="flex flex-col lg:flex-row gap-10">
          <AboutDescription />
          <Manifesto />
        </div>
      </div>
      <Slogan />
      <AboutCustomers />
      <AboutCards />
    </section>
  );
};

export default page;
