import ItemCategories from "../ItemCategories";
import {
  WritingInstruments,
  PaperProducts,
  DeskOrganization,
  // FilingStorage,
  ArtsCrafts,
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
      {/* <ItemCategories category="Filing and Storage" items={FilingStorage} /> */}
      <ServicesMaintenance />
      <ItemCategories category="Arts and Crafts" items={ArtsCrafts} />
    </div>
  );
};

export default index;
