import Link from "next/link";

const HomeContactUs = () => {
  return (
    <div className="mt-24 w-full py-20 flex justify-center items-center gap-5 bg-primary">
      <h2 className="text-base font-bold text-xl text-body-color italic leading-md ">
        You purchased an item from us and want maintenance?
      </h2>
      <Link
        href="/contact"
        className="block w-fit rounded-md relative inline-flex group items-center justify-center px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-primary to-secondary border-primary overflow-hidden"
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
        <span className="relative text-center text-base font-medium text-white">
          Contact Us
        </span>
      </Link>
    </div>
  );
};

export default HomeContactUs;
