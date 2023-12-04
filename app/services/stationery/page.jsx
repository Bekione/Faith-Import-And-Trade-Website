import PageHeader from "@components/Common/PageHeader";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceHero from "../ServiceHero";
import Stationary from "@components/Services/Stationary";

export const metadata = {
  title: "Faith | Stationary Supplies",
  description: "Browse our extensive collection of imported stationery supplies, including paper, pens, notebooks, and more. We offer premium quality products that cater to your office and personal needs. With our global reach, we ensure you have access to a wide range of stationery options to inspire creativity and organization.",
};

const page = () => {
  const introText =
    "Welcome to our Stationery section! Explore a wide range of essential items to enhance your productivity and creativity. From writing instruments to desk organization solutions, our curated selection has everything you need to stay organized and inspired. Browse through our categories and find the perfect stationery items to make your workspace a reflection of your unique style. Enjoy exploring!";

  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <PageHeader
        title="Stationery"
        titleExtra="Supplies"
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
