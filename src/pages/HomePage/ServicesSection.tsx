import React from "react";

import DenturesIcon from "../../assets/images/HomePage/dentures.svg";
import ImplantsIcon from "../../assets/images/HomePage/implants.svg";
import WhiteningIcon from "../../assets/images/HomePage/whitening.svg";
import RootCanalIcon from "../../assets/images/HomePage/root-canal.svg";

const services = [
  {
    img: DenturesIcon,
    name: "Dentures",
    color: "bg-sky-light",
  },
  {
    img: ImplantsIcon,
    name: "Implants",
    color: "bg-violet-light",
  },
  {
    img: WhiteningIcon,
    name: "Whitening",
    color: "bg-fuchsia-light",
  },
  {
    img: RootCanalIcon,
    name: "Root Canal",
    color: "bg-orange-light",
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col max-w-screen-laptopM mx-auto">
      {/* title, paragraph */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-4">
          <span className="section-small-title">Services</span>
          <h2 className="max-w-[428px]">Feel amazing about your oral health</h2>
        </div>

        <p className="max-w-xl text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* list of services */}
      <div className="mt-14 mb-10 grid content-center grid-cols-1 mobileXL:grid-cols-2 laptop:grid-cols-4 gap-10">
        {services.map(({ img, name, color }) => (
          <div
            className="max-w-[290px] rounded-[32px] border border-[#eee]
            flex flex-col gap-y-6 p-4"
          >
            <div
              className={`${color} rounded-[32px] px-20 py-12 flex items-center justify-center`}
            >
              <img src={img} alt={name} className="min-w-[96px] min-h-[96px]" />
            </div>

            <div className="flex flex-col items-center text-center gap-y-2">
              <h3>{name}</h3>
              <p className="text-violet-dark/50 text-base">
                Lorem ipsum is placeholder text commonly used in the graphic
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-violet-light text-violet font-bold py-5 px-8
        rounded-2xl self-center flex items-center gap-x-4 group
        hover:bg-violet hover:text-white duration-300 ease-in"
      >
        View all service list
        {/*<img src={VioletRightArrow} alt="" className="w-6 h-6" />*/}
        <svg className="group w-6 h-6 fill-none">
          <circle
            cx="12"
            cy="12"
            r="12"
            className="fill-[#583fbc] group-hover:fill-white duration-300 ease-in"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11 8 4 4-4 4"
            className="stroke-[2] stroke-white group-hover:stroke-violet duration-300 ease-in"
          />
        </svg>
      </button>
    </div>
  );
};

export default ServicesSection;
