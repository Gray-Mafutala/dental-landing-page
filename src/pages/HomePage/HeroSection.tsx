import VioletButton from "../../components/UI/VioletButton";
import ContactDentalEmergency from "../../components/UI/ContactDentalEmergency";

import heroImg from "../../assets/images/HomePage/indoor-shot-happy-young-woman.png";
import drSamanthaImg from "../../assets/images/HomePage/dr-samantha.png";

const HeroSection = () => {
  return (
    <section
      className="px-5 mobileM:px-6 bg-sky-light bg-hero-3-vectors bg-no-repeat bg-[center_2rem]
      rounded-[48px] flex flex-col justify-center items-center gap-x-10 pt-8
      tabletL:flex-row gap-y-5"
    >
      {/* left content */}
      <div
        className="mb-8 flex flex-col items-center text-center
        tabletL:items-start tabletL:text-left"
      >
        <h1 className="max-w-[516px] mt-10 tabletL:mt-5 laptopM:mt-0">
          Entrust your smile to professional
        </h1>
        <p className="max-w-xl mt-12 mb-14 tabletL:mt-8">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <div
          className="flex items-center justify-center gap-4
          flex-wrap-reverse tabletL:justify-between"
        >
          <VioletButton addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 self-start">
            Book an appointment
          </VioletButton>

          <ContactDentalEmergency />
        </div>
      </div>

      {/* right content */}
      <div
        className="flex justify-center relative self-end mx-auto tabletL:mx-0
        w-auto h-auto mobileXL:w-[550px] mobileXL:h-[480px]"
      >
        {/* hero image */}
        <img
          src={heroImg}
          alt="Entrust your smile to professional"
          className="min-w-60 w-[full] h-auto mobileXL:h-full object-cover"
        />

        {/* chat with consultant */}
        <div
          className="absolute bg-white rounded-2xl p-2 mobileM:p-3
          mobileM:pr-4 mobileXL:pr-8 flex flex-col gap-y-3 text-center
          items-center mobileL:flex-row mobileL:text-left gap-x-5 cursor-pointer
          left-1/2 -translate-x-1/2 bottom-5 tabletL:left-0 tabletL:translate-x-0 
          hover:shadow-[0_0_0_2px_#583fbc] active:shadow-none duration-300
          mobileL:whitespace-nowrap"
        >
          <img
            src={drSamanthaImg}
            alt=""
            className="w-[57px] h-[57px] object-contain"
          />

          <p className="flex flex-col gap-y-1">
            <span className="text-sm font-bold text-violet-dark">
              Dr. Samantha Alice
            </span>
            <span className="text-xs font-medium text-violet-dark/70">
              Consultant
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
