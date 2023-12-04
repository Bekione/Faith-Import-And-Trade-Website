import Link from "next/link";

const SecondaryButton = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="block w-fit rounded-md relative inline-flex group items-center justify-center px-12 py-3 border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-secondary border-primary overflow-hidden"
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-20"></span>
      <span className="relative whitespace-nowrap text-center text-base font-medium text-white">
        {text}
      </span>
    </Link>
  );
};

export default SecondaryButton;
