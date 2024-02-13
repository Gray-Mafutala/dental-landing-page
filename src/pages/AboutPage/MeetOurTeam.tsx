import React from "react";

import DianneRussellPhoto from "../../assets/images/AboutPage/dianne-russell.png";
import EstherHoward from "../../assets/images/AboutPage/esther-howard.jpg";
import DarrellSteward from "../../assets/images/AboutPage/darrell-steward.png";
import JennyWilson from "../../assets/images/AboutPage/jenny-wilson.png";

const teamMembers = [
  { photo: DianneRussellPhoto, name: "Dianne Russell" },
  {
    photo: EstherHoward,
    name: "Esther Howard",
  },
  { photo: DarrellSteward, name: "Darrell Steward" },
  { photo: JennyWilson, name: "Jenny Wilson" },
];

const MeetOurTeam = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-16">
      {/* title, paragraph */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-4">
          <span className="section-small-title">Meet our team</span>
          <h2 className="max-w-[540px]">
            Get to know the dentalist dental Team
          </h2>
        </div>

        <p className="max-w-xl text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* team members */}
      <div
        className="grid grid-cols-1 content-center 
        mobileXL:grid-cols-2 laptop:grid-cols-4 gap-10"
      >
        {teamMembers.map(({ photo, name }) => (
          <div key={name} className="flex flex-col items-center gap-y-6">
            <img
              src={photo}
              alt={name}
              className="w-[290px] h-[350px] object-cover rounded-[2rem]
              shadow-sm"
            />
            <span className="text-lg font-bold -tracking-[0.4px] text-violet-dark">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
