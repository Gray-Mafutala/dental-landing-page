import React from "react";

import sontaneousPainIcon from "../../assets/images/ServicesPage/sontaneous-pain.svg";
import discolorationOfToothIcon from "../../assets/images/ServicesPage/discoloration-of-tooth.svg";
import middleNightPainIcon from "../../assets/images/ServicesPage/middle-night-pain.svg";
import tendernessInGumsIcon from "../../assets/images/ServicesPage/tenderness-in-gums.svg";
import extremeSensitivityIcon from "../../assets/images/ServicesPage/extreme-sensitivity.svg";

const symptoms = [
  {
    img: sontaneousPainIcon,
    title: "Spontaneous pain",
    desc: "Spontaneous pain even when you’re not eating or drinking.",
  },
  {
    img: discolorationOfToothIcon,
    title: "Discoloration of tooth",
    desc: "Darkening or discoloration of a tooth.",
  },
  {
    img: middleNightPainIcon,
    title: "Middle night pain",
    desc: "Pain that wakes you up in the middle of the night.",
  },
  {
    img: tendernessInGumsIcon,
    title: "Tenderness in gums",
    desc: "From floss bosses to sweet tooths, every mouth is welcome.",
  },
  {
    img: extremeSensitivityIcon,
    title: "Extreme sensitivity",
    desc: "Extreme sensitivity to cold or heat when your’e drink or eat.",
  },
];

const SymptomsSection = () => {
  return (
    <section
      className="bg-orange-light rounded-[48px] pt-20 px-24 pb-16
      flex flex-col items-center gap-y-14"
    >
      {/* top content */}
      <div className="flex flex-col items-center text-center">
        <span className="section-small-title">Symptoms</span>
        <h2 className="mt-4 mb-6">Sign and symptoms you need root canal</h2>
        <p className="max-w-[848px] text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* bottom content */}
      <div className="grid grid-cols-2 gap-12">
        {symptoms.map(({ img, title, desc }) => (
          <div key={title} className="flex items-center gap-x-6">
            <img src={img} alt={title} className="w-24 h-auto object-cover" />

            <div className="flex flex-col gap-y-2">
              <h3>{title}</h3>
              <p className="w-72 text-violet-dark/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SymptomsSection;
