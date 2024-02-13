import React from "react";

import DoctorAndNursePerformingAPatientImg from "../../assets/images/AboutPage/doctor-and-nurse-performing-a-dental-procedure-on-a-patient.png";
import VioletButton from "../../components/UI/VioletButton";

const OurPrioritySection = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
      {/* left content */}
      <div className="flex flex-col">
        <span className="section-small-title">Our priority</span>

        <h2 className="max-w-[395px] mt-4 mb-6">
          Our clients are our priority
        </h2>

        <p className="max-w-[510px] text-violet-dark/70 mb-16">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
          Book an appointment
        </VioletButton>
      </div>

      {/* right content */}
      <div className="max-w-[550px]">
        <img
          src={DoctorAndNursePerformingAPatientImg}
          alt="Doctor and nurse performing a dental procedure on a patient"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default OurPrioritySection;
