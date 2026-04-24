import { IoMdCheckmark } from "react-icons/io";
import image from "../../assets/images/about-us-img2.jpg";
import { Link } from "react-router";

const items1 = [
  {
    id: 1,
    text: "Mauris convallis felis",
  },
  {
    id: 2,
    text: "Vestibulum nec dui",
  },
  {
    id: 3,
    text: "Donec euismod urna",
  },
];
const items2 = [
  {
    id: 1,
    text: "Praesent vulputate diam",
  },
  {
    id: 2,
    text: "Curabitur facilisis",
  },
  {
    id: 3,
    text: "Mauris convallis felis",
  },
];

const AboutExpertise = () => {
  return (
    <div className="hero px-5 md:px-12 lg:px-20 2xl:px-60 py-10 md:py-20 lg:py-0 h-full lg:h-[91vh] 2xl:h-[90vh] flex lg:flex-row flex-col gap-10 md:gap-15 lg:gap-20 items-center justify-between">
      <div data-aos="fade-up" className="w-full lg:w-1/2">
        <span className="bg-[#1d4ed81f] text-[#047857] uppercase px-5 py-1 rounded-full text-[14px] md:text-[16px]">
          Ready to Find Your Dream Job?
        </span>
        <h1 className="font-semibold md:font-bold text-[32px] md:text-[45px] lg:text-[50px] leading-10 md:leading-12 lg:leading-14 pt-3 md:pt-4 lg:pt-5">
          Expertise that drives success and innovation
        </h1>
        <p className="py-3 md:py-4 lg:py-5 text-[14px] md:text-[16px] text-[#64748b] text-justify">
          Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit
          pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam
          movet omnes id, usu te meis corpora. Augue doming quaestio vix at.
          Sumo duis ea sed, ut vix euismod lobortis prodesset, everti
          necessitatibus mei cu.
        </p>
        <p className="text-[14px] md:text-[16px] text-[#64748b] text-justify">
          Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam
          principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum
          gubergren definitionem id usu, graeco cetero ius ut.
        </p>

        <div className="flex justify-between pt-3 md:pt-4 lg:pt-5 ">
          <ul className="flex flex-col gap-2 lg:gap-3">
            {items1?.map((item) => (
              <li
                className="flex items-center gap-2 lg:gap-3 text-[14px] md:text-[16px]"
                key={item?.id}
              >
                <IoMdCheckmark className="text-[#1d4ed8]" />
                <span className="text-[#64748b]">{item?.text}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 lg:gap-3">
            {items2?.map((item) => (
              <li
                className="flex items-center gap-2 lg:gap-3 text-[14px] md:text-[16px]"
                key={item?.id}
              >
                <IoMdCheckmark className="text-[#1d4ed8]" />
                <span className="text-[#64748b]">{item?.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2 lg:flex lg:justify-end"
      >
        <img className="rounded-2xl w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutExpertise;
