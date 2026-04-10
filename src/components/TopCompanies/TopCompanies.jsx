import { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import Company from "./Company";
import { Link } from "react-router";

const TopCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`/companies.json`)
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18">
      <SectionHeader
        subTitle={"Here You Can See"}
        title={"Top Companies are Hiring"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5  2xl:gap-6">
        {companies?.map((companie) => (
          <Company key={companie?.id} companie={companie} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-6 md:pt-8 lg:pt-10 2xl:pt-12 ">
        <Link
          className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px]"
          to={""}
        >
          View All Companies
        </Link>
      </div>
    </div>
  );
};

export default TopCompanies;
