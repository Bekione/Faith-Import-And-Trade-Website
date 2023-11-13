import ItemCategories from "../ItemCategories";
import {
  LaptopsDesktops,
  MonitorsDisplays,
  NetworkingDevices,
} from "./itemsData";
import BrandsSlider from "@components/Brands/BrandsSlider";
import ServicesContact from "../ServicesContact";
import ServicesMaintenance from "../ServicesMaintenance";

const index = () => {
  return (
    <div className="">
      <ItemCategories category="Laptops & Desktops" items={LaptopsDesktops} />
      <ItemCategories category="Monitors & Displays" items={MonitorsDisplays} />
      <BrandsSlider />
      <ItemCategories
        category="Networking Devices "
        items={NetworkingDevices}
      />
      <ServicesContact />
      <ServicesMaintenance />
    </div>
  );
};
export default index;
