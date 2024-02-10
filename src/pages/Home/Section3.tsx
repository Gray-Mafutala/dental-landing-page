import React from "react";

import DenturesIcon from "../../assets/svg/HomePage/dentures.svg";
import ImplantsIcon from "../../assets/svg/HomePage/implants.svg";
import WhiteningIcon from "../../assets/svg/HomePage/whitening.svg";
import RootCanalIcon from "../../assets/svg/HomePage/root-canal.svg";
import VioletRightArrow from "../../assets/svg/HomePage/violet-right-arrow.svg";

const Section3 = () => {
  return (
    <div className="flex flex-col">
      {/* title, paragraph */}
      <div></div>

      {/* list of services */}
      <div className="mt-28 mb-24 grid content-center grid-cols-1 mobileXL:grid-cols-2 laptop:grid-cols-4 gap-10">
        {/* Dentures */}
        <div className="rounded-[32px] border border-[#eee] flex flex-col gap-y-6 p-4">
          <div
            className="rounded-[32px] px-20 py-12 bg-sky-light flex items-center
            justify-center"
          >
            <img
              src={DenturesIcon}
              alt="Dentures"
              className="min-w-[96px] min-h-[96px]"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-y-2">
            <h3>Dentures</h3>
            <p className="text-violet-dark/50 text-base">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
          </div>
        </div>

        {/* Implants */}
        <div className="rounded-[32px] border border-[#eee] flex flex-col gap-y-6 p-4">
          <div
            className="rounded-[32px] px-20 py-12 bg-violet-light flex items-center
            justify-center"
          >
            <img
              src={ImplantsIcon}
              alt="Implants"
              className="min-w-[96px] min-h-[96px]"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-y-2">
            <h3>Implants</h3>
            <p className="text-violet-dark/50 text-base">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
          </div>
        </div>

        {/* Whitening */}
        <div className="rounded-[32px] border border-[#eee] flex flex-col gap-y-6 p-4">
          <div
            className="rounded-[32px] px-20 py-12 bg-fuchsia-light flex items-center
            justify-center"
          >
            <img
              src={WhiteningIcon}
              alt="Whitening"
              className="min-w-[96px] min-h-[96px]"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-y-2">
            <h3>Whitening</h3>
            <p className="text-violet-dark/50 text-base">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
          </div>
        </div>

        {/* Root Canal */}
        <div className="rounded-[32px] border border-[#eee] flex flex-col gap-y-6 p-4">
          <div
            className="rounded-[32px] px-20 py-12 bg-orange-light flex items-center
            justify-center"
          >
            <img
              src={RootCanalIcon}
              alt="Root canal"
              className="min-w-[96px] min-h-[96px]"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-y-2">
            <h3>Root Canal</h3>
            <p className="text-violet-dark/50 text-base">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-x-4 whitespace-nowrap">
        View all service list
        <img src={VioletRightArrow} alt="" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Section3;
