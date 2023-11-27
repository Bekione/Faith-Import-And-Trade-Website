import Link from "next/link";

const ServicesContact = ({ ctx }) => {
  return (
    <div className="my-12 w-full px-10 md:px-4 py-12 sm:py-16 md:py-20 flex flex-col sm:flex-row justify-center items-center gap-5 bg-gradient-to-r from-primary to-secondary">
      <h2 className="text-base text-center font-bold text-xl text-white italic leading-md ">
        {ctx === "maintenance"
          ? "Need maintenance or want to schedule an appointment to discuss your requirements?"
          : "Want to order any of these items?"}
      </h2>
      <Link
        href="/contact"
        className="block w-fit rounded-md relative inline-flex group items-center justify-center px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-secondary to-primary border-primary overflow-hidden"
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
        <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
          Contact Us
        </span>
      </Link>
    </div>
  );
};

export default ServicesContact;
