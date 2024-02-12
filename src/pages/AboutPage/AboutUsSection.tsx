import React from "react";

import VioletButton from "../../components/UI/VioletButton";
import DentistAndHisSmilingPatientImg from "../../assets/images/HomePage/dentist-and-his-smiling-patient.png";

const AboutUsSection = () => {
  return (
    <section
      className="mt-10 max-w-[1200px] w-full mx-auto flex items-center
      justify-between gap-24"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1 className="whitespace-nowrap">About Us</h1>
        <p className="max-w-[550px] text-violet-dark/70 mt-8 mb-16">
          We want you to feel amazing about your oral wellness. Not just twice a
          year, but every time you take a bite, tell a joke, laugh, or share a
          kiss.
        </p>
        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
          Contact Us
        </VioletButton>
      </div>

      {/* right content */}
      <div className="max-w-[620px]">
        <img
          src={DentistAndHisSmilingPatientImg}
          alt="A dentist and his smiling patient"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
