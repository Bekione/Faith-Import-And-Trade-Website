import ItemCategories from "../ItemCategories";
import { LaptopsDesktops } from "./itemsData";

const index = () => {
  return (
    <div className="">
      <ItemCategories category="Laptops & Desktops" items={LaptopsDesktops} />
    </div>
  );
};

export default index;
