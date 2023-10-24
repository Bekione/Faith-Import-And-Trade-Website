import CustomersSlider from "@components/Customers/CustomersSlider";
import SectionTitle from "@components/Common/SectionTitle";

const HomeCustomers = () => {
  return (
    <div className="my-12">
      <SectionTitle title="Our customers" />
      <CustomersSlider />
    </div>
  );
};

export default HomeCustomers;
