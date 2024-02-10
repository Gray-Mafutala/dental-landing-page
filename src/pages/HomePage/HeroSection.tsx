import React from "react";

import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/images/HomePage/indoor-shot-happy-young-woman.png";
import TelephoneIcon from "../../assets/svg/telephone.svg";

const HeroSection = () => {
  return (
    <div
      className="bg-sky-light bg-hero-3-vectors bg-no-repeat
      bg-[center_2rem] rounded-[48px] px-24 flex justify-between
      items-center"
    >
      {/* left content */}
      <div className="w-full flex flex-col">
        <h1>Entrust your smile to professional</h1>
        <p className="max-w-xl mt-8 mb-14 text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <div className="flex items-center justify-between max-w-xl ">
          <VioletButton addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start">
            Book an appointment
          </VioletButton>

          <div className="flex items-center gap-x-4">
            <img src={TelephoneIcon} alt="" className="max-w-[64px]" />
            <div className="flex flex-col">
              <span className="section-small-title">Dental 24H Emergency</span>
              <span className="text-violet-dark font-bold">03 482 394 123</span>
            </div>
          </div>
        </div>
      </div>

      {/* right content */}
      <div className="mt-[50px] w-full flex justify-center">
        <img
          src={HeroImg}
          alt="Entrust your smile to professional"
          className="max-w-md w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
