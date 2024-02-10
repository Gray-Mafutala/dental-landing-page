import React from "react";

import YoungAsianFemaleDentistImg from "../../assets/images/HomePage/young-asian-female-dentist.png";
import VioletCircleOk from "../../assets/images/HomePage/violet-circle-ok.svg";

const ExpertsInDental = () => {
  return (
    <div
      className="max-w-screen-laptopM mx-auto
      flex justify-between w-full items-center"
    >
      {/* left content */}
      <div className="flex flex-col gap-y-8">
        {/* top title, paragraph... */}
        <div className="flex flex-col">
          <span className="section-small-title">Experts in dental</span>
          <h2 className="max-w-[590px] mt-4 mb-6">
            Top-notch dentistry, from Seattle's top dentists.
          </h2>
          <p className="max-w-[510px]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
        </div>

        {/* bottom list */}
        <ul className="flex flex-col gap-y-4">
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Top quality dental team</span>
          </li>
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>State of the art dental services</span>
          </li>
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Discount on all dental treatment</span>
          </li>
        </ul>
      </div>

      {/* right content */}
      <div className="max-w-[550px]">
        <img
          src={YoungAsianFemaleDentistImg}
          alt="Young asian female dentist"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ExpertsInDental;
