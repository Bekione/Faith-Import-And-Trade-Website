const SingleManifesto = ({ manifesto }) => {
  const { icon, title, paragLong } = manifesto;

  return (
    <div className="single-manifesto py-12 sm:py-0 sm:px-8 md:px-12 lg:px-20 w-full flex flex-col justify-center relative bg-primary ">
      <div className="lg:px-16">
        <div className="mb-8 sm:mb-10 flex h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] ms:h-[70px] md:w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-4 sm:mb-5 capitalize text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {typeof paragLong === "object"
            ? paragLong.map((text, idx) => <span className="block" key={idx}>{text}</span>)
            : paragLong}
        </p>
      </div>
    </div>
  );
};

export default SingleManifesto;
