import Hero from "@components/Hero";
import ScrollUp from "@components/Common/ScrollUp";


export default function Home() {
  return (
    <section className="relative z-10 overflow-hidden pb-16 md:pb-[120px] xl:pb-[140px] 2xl:pb-[160px]">
      <ScrollUp />
      <Hero />
      
    </section>
  );
}
