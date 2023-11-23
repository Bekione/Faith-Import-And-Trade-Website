import ItemCategories from "../ItemCategories";
import {
  LaptopsDesktops,
  MonitorsDisplays,
  NetworkingDevices,
  OfficeEquipments,
  PowerSolutions,
  Others,
} from "./itemsData";
import BrandsSlider from "@components/Brands/BrandsSlider";
import ServicesContact from "../ServicesContact";
import ServicesMaintenance from "../ServicesMaintenance";

const index = () => {
  return (
    <div className="">
      <ItemCategories category="Laptops & Desktops" items={LaptopsDesktops} />
      <ItemCategories category="Monitors & Displays" items={MonitorsDisplays} />
      <BrandsSlider ctx="computer" />
      <ItemCategories
        category="Networking Devices "
        items={NetworkingDevices}
      />
      <ServicesContact />
      <ItemCategories category="Office Equipments" items={OfficeEquipments} />
      <ItemCategories category="Power Solutions" items={PowerSolutions} />
      <ServicesMaintenance />
      <ItemCategories category="Others" items={Others} />
    </div>
  );
};
export default index;
