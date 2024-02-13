import React from "react";

import clinicImg1 from "../../assets/images/ContactPage/clinic-img-1.png";
import clinicImg2 from "../../assets/images/ContactPage/clinic-img-2.png";
import mapImg from "../../assets/images/ContactPage/map-img.png";

const addresses = [
  {
    imgClinic: clinicImg1,
    nameClinic: "Dentalist Main Clinic",
    address: "35 West Dental Street California 1004",
  },
  {
    imgClinic: clinicImg2,
    nameClinic: "Dentalist Main Clinic",
    address: "35 West Dental Street California 1004",
  },
];

const OurClinicSection = () => {
  return (
    <section className="flex flex-col items-center text-center">
      {/* titles */}
      <span className="section-small-title">Our clinic</span>
      <h2 className="mt-4 mb-16">
        Come to our clinic and get best dental services
      </h2>

      {/* bottom content */}
      <div className="flex justify-center gap-x-10">
        {/* address card */}
        {addresses.map(({ imgClinic, nameClinic, address }) => (
          <div
            className="flex flex-col items-center p-4 pb-6 rounded-[2rem] 
            border border-[#eee] gap-y-6"
          >
            {/* image and map */}
            <div className="flex  gap-x-4 justify-center max-h-[250px]">
              <img
                src={imgClinic}
                alt={`Clinic - ${address}`}
                className="h-full rounded-l-[2rem] w-64"
              />
              {/* put maps here */}
              <img
                src={mapImg}
                alt=""
                className="h-full rounded-r-[2rem] w-36"
              />
            </div>

            {/* address */}
            <p className="flex flex-col gap-y-3">
              <span className="text-lg text-violet-dark font-bold">
                {nameClinic}
              </span>
              <span className="font-medium text-violet-dark/70">{address}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClinicSection;
