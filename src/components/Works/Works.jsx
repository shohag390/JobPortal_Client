import { FaPaperPlane, FaUserPlus } from "react-icons/fa";
import SectionHeader from "../../shared/SectionHeader";
import Work from "./Work";
import { IoMdDocument } from "react-icons/io";

const steps = [
  {
    title: "Create An Account",
    description:
      "Creating an account is simple and quick, allowing you to begin exploring opportunities and building your professional journey without delay.",
    icon: <FaUserPlus />,
  },
  {
    title: "Complete your profile",
    description:
      "Fill out your profile with accurate details, skills, and experience so employers can easily understand your background and potential value.",
    icon: <IoMdDocument />,
  },
  {
    title: "Apply job or hire",
    description:
      "Search and apply for jobs that match your skills or hire talented professionals efficiently to meet your business needs quickly.",
    icon: <FaPaperPlane />,
  },
];

const Works = () => {
  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18 works">
      <SectionHeader subTitle={"Simple Steps"} title={"How It Works"} />

      <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-5  2xl:gap-6">
        {steps?.map((step, index) => (
          <Work key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Works;
