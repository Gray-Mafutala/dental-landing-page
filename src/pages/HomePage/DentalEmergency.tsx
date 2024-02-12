import React from "react";

import VioletButton from "../../components/UI/VioletButton";
import DentalSurgeryImg from "../../assets/images/HomePage/patient-receiving-dental-treatment-1.png";

const DentalEmergency = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto flex justify-between w-full
      items-center"
    >
      {/* left content */}
      <div className="max-w-[550px]">
        <img
          src={DentalSurgeryImg}
          alt="Patient receiving dental treatment"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* right content */}
      <div className="flex flex-col">
        <span className="section-small-title">Dental 24 emergency</span>

        <h2 className="max-w-[550px] mt-4 mb-6">
          Gentle, friendly treatment from our locally practice
        </h2>

        <p className="max-w-[510px] text-violet-dark/70 mb-16">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
          Book an appointment
        </VioletButton>
      </div>
    </section>
  );
};

export default DentalEmergency;
