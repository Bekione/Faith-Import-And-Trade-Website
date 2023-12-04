import Link from "next/link";

const PrimaryButton = ({ path, text, classes }) => {
  return (
    <Link
      href={path}
      className={`block w-fit mt-5 sm:mt-8 px-6 py-4 ${classes ? classes : ''} rounded-xl font-bold text-white bg-secondary hover:bg-primary shadow-secondary hover:shadow-primary transition-all duration-500`}
    >
      {text ? text : "Read More"}
    </Link>
  );
};

export default PrimaryButton;
