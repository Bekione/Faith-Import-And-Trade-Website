import SecondaryButton from "@components/Common/SecondaryButton";

const ServicesContact = ({ ctx }) => {
  return (
    <div className="my-12 w-full px-10 md:px-4 py-12 sm:py-16 md:py-20 flex flex-col sm:flex-row justify-center items-center gap-5 bg-primary">
      <h2 className="text-base text-center font-bold text-xl text-white italic leading-md ">
        {ctx === "maintenance"
          ? "Need maintenance or want to schedule an appointment to discuss your requirements?"
          : "Want to order any of these items?"}
      </h2>
      <SecondaryButton path="/contact" text="Contact Us" />
    </div>
  );
};

export default ServicesContact;
