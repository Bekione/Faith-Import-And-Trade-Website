import SecondaryButton from "@components/Common/SecondaryButton";

const ServicesContact = () => {
  return (
    <div className="mt-24 w-full px-10 md:px-4 py-12 sm:py-16 md:py-20 flex flex-col sm:flex-row justify-center items-center gap-5 bg-primary">
      <h2 className="text-base text-center font-bold text-xl text-white italic leading-md ">
        Want to keep your devices safe? Learn about
      </h2>
      <SecondaryButton path="/services/maintenance" text="Maintenance" />
    </div>
  );
};

export default ServicesContact;
