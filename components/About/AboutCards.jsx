import AboutSectionTitle from "./AboutSectionTitle";
import { cardsData } from "./cardsData";

const AboutCards = () => {
  return (
    <div className="mt-8">
      <AboutSectionTitle title="Essences" subTitle="Why Us?" />
      <div className="mx-[3%] p-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-[1fr] gap-x-6 2xl:gap-x-10 gap-y-6 content-around justify-center">
        {cardsData.map((card) => (
          <div
            className="group/card h-full p-7 flex flex-col bg-white rounded-lg shadow-2xl"
            key={card.id}
            style={{
              boxShadow:
                "1px 1px 2px rgba(0,0,0,0.06), 1px 2px 4px rgba(0,0,0,0.06), -2px 4px 8px rgba(0,0,0,0.05), -4px 8px 16px rgba(0,0,0,0.05), 8px 16px 32px rgba(0,0,0,0.04), 6px 32px 64px rgba(0,0,0,0.04);",
            }}
          >
            <div className="flex itemx-center justify-center mb-[.85rem]">
              <svg
                className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] transform group-hover/card:scale-[1.1] transition"
                viewBox={card.viewBox}
                dangerouslySetInnerHTML={{ __html: card.icon }}
              ></svg>
            </div>
            <div className="mb-[1rem]">
              <h2 className="text-center text-primary font-bold text-2xl">
                {card.title}
              </h2>
            </div>
            <div className="mx-2 sm:mx-[1.5rem]">
              <p className="text-base text-center text-[#000000c4] leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
