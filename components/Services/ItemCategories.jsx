import Image from "next/image";

const ItemCategories = ({ category, items }) => {
  return (
    <div className="my-10 px-10">
      <div className="relative py-8 mb-4">
        <div className="sm:ml-32 text-3xl font-extrabold capitalize">
          <h1 className="w-fit text-primary">{category}</h1>
        </div>
        <div className="absolute bottom-4 sm:bottom-6  sm:top-1/2 transform sm:-transform-y-1/2 h-1 w-[65%] sm:w-28 bg-secondary transform skew-x-[40deg]"></div>
      </div>
      <div className="w-full sm:px-20 mdPlus:px-0 max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] items-stretch gap-12">
        {items.map((item) => {
          return (
            <div key={item.id} className="pt-[62.5%] relative">
              <div className="absolute inset-0 w-full h-full group rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  width={352}
                  height={240}
                  alt={item.itemName}
                  quality={100}
                  className="object-cover w-full h-full group-hover: transition"
                />
                <div className="absolute bottom-0 left-0 w-full h-[54px] sm:h-[64px] group-hover:h-full bg-gradient-to-r from-secondary group-hover:bg-gradient-to-b group-hover:from-secondary group-hover:via-secondary group-hover:rounded-md rounded-b-md transition-background duration-500 ease-in-out transition-height duration-500 ease-in-out overflow-hidden">
                  <p
                    className={`absolute w-fit min-w-[18ch] top-1/2 left-8 transform -translate-y-1/2 group-hover:top-10 sm:group-hover:top-14 text-white text-base font-semibold group-hover:font-bold text-md group-hover:text-[1.3rem] sm:group-hover:text-2xl transition-all duration-[500ms] ease-in-out`}
                  >
                    {item.itemName}
                  </p>
                  <p className="absolute transform invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 top-[4.5rem] sm:top-24 text-center text-md px-4 md:px-8 text-base text-white italic font-normal line-clamp-3 transition-all duration-500 delay-300 ease-in-out">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemCategories;
