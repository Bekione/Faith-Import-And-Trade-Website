const ServiceInfo = ({ title, text, ID }) => {
  return (
    <div className="mx-auto mt-5 w-11/12" id={ID}>
      <h3 className="mb-2 text-secondary font-bold text-[1.5em]">{title}</h3>
      <p className="mb-5 pl-2 text-justify text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
        {text}
      </p>
    </div>
  );
};

export default ServiceInfo;
