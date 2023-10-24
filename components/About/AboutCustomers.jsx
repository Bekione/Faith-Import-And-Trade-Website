import AboutSectionTitle from "./AboutSectionTitle";
import CustomersSlider from "@components/Customers/CustomersSlider";
import React from "react";

const AboutCustomers = () => {
  return (
    <div className="mt-20">
      <AboutSectionTitle title="Our clients" subTitle="Trust & worth" />
      <CustomersSlider />
    </div>
  );
};

export default AboutCustomers;
