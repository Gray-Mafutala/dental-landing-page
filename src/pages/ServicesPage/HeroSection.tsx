import React from "react";

import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/images/ServicesPage/two-dentists-and-a-patient.png";
//px-24 
const HeroSection = () => {
  return (
    <section
      className="bg-sky-light pl-24 pr-8 rounded-[48px] pt-20 pb-20 flex
      justify-center items-center gap-x-2 mb-40"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1>Root canals</h1>
        <p className="max-w-[490px] mt-8 mb-14 text-violet-dark/70">
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </p>

        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
          Book an appointment
        </VioletButton>
      </div>

      {/* right content */}
      <div className="maw-w-[730px] flex justify-center -mb-52">
        <img
          src={HeroImg}
          alt="Dental surgery"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
