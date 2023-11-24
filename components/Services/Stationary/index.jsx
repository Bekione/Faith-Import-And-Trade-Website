import ItemCategories from "../ItemCategories";
import {
  WritingInstruments,
  PaperProducts,
  DeskOrganization,
  ArtsCrafts,
  Others,
} from "./itemsData";
import BrandsSlider from "@components/Brands/BrandsSlider";
import ServicesContact from "../ServicesContact";
import ServicesMaintenance from "../ServicesMaintenance";

const index = () => {
  return (
    <div className="">
      <ItemCategories
        category="Writing Instruments"
        items={WritingInstruments}
      />
      <ItemCategories category="Paper Products" items={PaperProducts} />
      <ServicesContact />
      <ItemCategories category="Desk Organization" items={DeskOrganization} />
      <BrandsSlider ctx="stationery" />
      <ItemCategories category="Arts and Crafts" items={ArtsCrafts} />
      <ServicesMaintenance />
      <ItemCategories category="Others" items={Others} />
    </div>
  );
};

export default index;
