import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceHero from "../ServiceHero";
import Stationary from "@components/Services/Stationary";

export const metadata = {
  title: "Faith | Stationary Supplies",
  description: "Explore our collection of premium stationary materials that will inspire your creativity and keep you organized. From elegant notebooks to vibrant pens and markers, we offer the tools to bring your ideas to life.",
};

const page = () => {
  const introText =
    "Welcome to our Stationery section! Explore a wide range of essential items to enhance your productivity and creativity. From writing instruments to desk organization solutions, our curated selection has everything you need to stay organized and inspired. Browse through our categories and find the perfect stationery items to make your workspace a reflection of your unique style. Enjoy exploring!";

  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Stationery"
        classes="bg-[url('/images/pages-head/bg-stationery.webp')]"
      />

      <div className="pt-5 ">
        <Breadcrumb paths={["services", "stationary"]} classes="pr-16" />
       
        <ServiceHero
          Intro={introText}
          imgPath="/images/stationery/stationery-hero.png"
          imgAlt="A bunch of stationery materials"
        />
        <Stationary />
      </div>
    </section>
  );
};

export default page;
