import ItemCategories from "../ItemCategories";
import { LaptopsDesktops, MonitorsDisplays } from "./itemsData";
import BrandsSlider from "@components/Brands/BrandsSlider";

const index = () => {
  return (
    <div className="">
      <ItemCategories category="Laptops & Desktops" items={LaptopsDesktops} />
      <ItemCategories category="Monitors & Displays" items={MonitorsDisplays} />
      <BrandsSlider />
    </div>
  );
};

export default index;
