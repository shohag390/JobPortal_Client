import React, { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import City from "./City";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(`/cities.json`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return (
    <div className="px-5 md:px-12 lg:px-20 2xl:px-60 py-8 md:py-10 lg:py-12 2xl:py-18">
      <SectionHeader
        subTitle={"Choose Your Location"}
        title={"Jobs by Cities"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5  2xl:gap-6">
        {cities?.map((city) => (
          <City key={city?.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
