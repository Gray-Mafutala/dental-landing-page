import React from "react";

import FormBookAppointment from "../../components/FormBookAppointment";

const HeroSection = () => {
  return (
    <section
      className="bg-sky-light pt-16 rounded-[48px] flex flex-col
      items-center text-center mb-[420px]"
    >
      {/* top content */}
      <h1 className="whitespace-nowrap">Contact Us</h1>
      <p className="mt-8 mb-16 max-w-[550px] text-lg font-medium text-violet-dark/70">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      {/* bottom content - form to book an appointment */}
      <FormBookAppointment addStylesToForm="bg-white pt-14 pb-12 px-24 rounded-[3rem] text-left shadow-md -mb-[420px]" />
    </section>
  );
};

export default HeroSection;
