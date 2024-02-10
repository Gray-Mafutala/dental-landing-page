import React from "react";
import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/svg/HomePage/hero-img-section1.png";

const Section1 = () => {
  return (
    <div
      className="mt-2 bg-sky-light rounded-[48px] px-28 py-24 flex justify-between
      items-center max-h-[600px] gap-x-12"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1>Root canals</h1>
        <p className="max-w-[490px] mt-8 mb-24 text-violet-dark/70">
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </p>

        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
          Book an appointment
        </VioletButton>
      </div>

      {/* right content */}
      <div className="border w-full h-full">
        <img
          src={HeroImg}
          alt="Dental surgery"
          className="max-w-md w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Section1;
