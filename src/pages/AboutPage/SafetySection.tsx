import React from "react";

import OperatingRoomImg from "../../assets/images/HomePage/operating-room.png";

const SafetySection = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full bg-violet-light
      rounded-[48px] pt-24 px-4 flex flex-col items-center gap-y-24
      mb-48"
    >
      {/* top content */}
      <div className="text-center">
        <span className="section-small-title">Safety</span>
        <h2 className="mt-4 mb-6">We put the safety first</h2>
        <p className="max-w-[510px] text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* bottom content */}
      <div className="max-w-[840px] -mb-48">
        <img
          src={OperatingRoomImg}
          alt="Dental operating room"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default SafetySection;
