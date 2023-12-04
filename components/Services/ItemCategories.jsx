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
      <div className="w-full sm:px-20 mdPlus:px-0 max-w-[1500px] mx-auto grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] items-stretch gap-12">
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
                {/* <div className="absolute bottom-0 left-0 py-5 px-6 pr-8 bg-primary">
                <p className="text-white text-base font-normal text-md">
                  {item.itemName} 
                </p>
                <div className="absolute -right-2 bottom-0 h-full w-2 transform skew-x-12 bg-secondary z-[10]"></div>
                <div className="absolute right-0 bottom-0 h-full w-[1rem] transform skew-x-12 bg-gradient-to-r from-[rgba(0,0,0,0)] to-[#2bd1aa]  z-[10]"></div>
              </div> */}
                <div className="absolute bottom-0 left-0 w-full h-[64px] group-hover:h-full bg-gradient-to-r from-secondary group-hover:bg-gradient-to-b group-hover:from-secondary group-hover:via-secondary group-hover:rounded-md rounded-b-md transition-background duration-500 ease-in-out transition-height duration-500 ease-in-out overflow-hidden">
                  <p
                    className={`absolute w-fit min-w-[18ch] top-1/2 left-8 transform -translate-y-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-x-1/2 group-hover:top-14 text-white text-base font-semibold group-hover:font-bold text-md group-hover:text-2xl transition-all duration-[500ms] ease-in-out`}
                  >
                    {item.itemName}
                  </p>
                  <p className="absolute transform invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 top-24 text-center text-md px-4 md:px-8 text-base text-white italic font-normal transition-all duration-500 delay-300 ease-in-out">
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
