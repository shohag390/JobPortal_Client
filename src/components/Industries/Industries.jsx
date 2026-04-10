import {
  FaBullhorn,
  FaCar,
  FaGraduationCap,
  FaHeartbeat,
  FaIndustry,
  FaLaptopCode,
  FaPlug,
  FaTruck,
  FaTshirt,
  FaUniversity,
} from "react-icons/fa";
import SectionHeader from "../../shared/SectionHeader";
import Industri from "./Industri";

const industries = [
  { name: "Manufacturing", count: 5, icon: <FaIndustry /> },
  { name: "Fashion", count: 2, icon: <FaTshirt /> },
  { name: "Electronics", count: 2, icon: <FaPlug /> },
  { name: "Advertising/PR", count: 2, icon: <FaBullhorn /> },
  { name: "Information Technology", count: 2, icon: <FaLaptopCode /> },
  { name: "Courier/Logistics", count: 1, icon: <FaTruck /> },
  { name: "Automobile", count: 1, icon: <FaCar /> },
  { name: "Education/Training", count: 1, icon: <FaGraduationCap /> },
  { name: "Banking/Financial Services", count: 1, icon: <FaUniversity /> },
  { name: "Health & Fitness", count: 1, icon: <FaHeartbeat /> },
];

const Industries = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18">
      <SectionHeader
        subTitle={"Explore Sectors"}
        title={"Popular Industries"}
      />

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5  2xl:gap-6">
        {industries?.map((industre, index) => (
          <Industri key={index} industre={industre} />
        ))}
      </div>
    </div>
  );
};

export default Industries;
