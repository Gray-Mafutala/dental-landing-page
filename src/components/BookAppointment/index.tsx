import React from "react";

import phoneViolet from "../../assets/images/HomePage/contact-phone-violet.svg";
import mapImg from "../../assets/images/HomePage/map-img.png";
import FormBookAppointment from "../FormBookAppointment";

const BookAppointment = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto flex justify-between gap-x-20">
      {/* left content - maps address */}
      <div className="relative">
        {/* maps */}
        <div className="max-w-[550px]">
          <img
            src={mapImg}
            alt="35 West Dental Street California 1004"
            className="w-full h-auto object-cover rounded-[2rem]"
          />
        </div>

        {/* address */}
        <div
          className="flex items-center gap-x-7 p-6 bg-white
          rounded-[2rem] absolute bottom-7 left-7 right-7 shadow-sm"
        >
          <img src={phoneViolet} alt="" className="max-w-[64px]" />
          <p className="max-w-[288px] text-lg font-bold text-violet-dark">
            35 West Dental Street California 1004
          </p>
        </div>
      </div>

      {/*  right content - titles, form... */}
      <div>
        {/* top content - titles... */}
        <div>
          <span className="section-small-title">Book appointment</span>
          <h2 className="mt-4 mb-6">Care at Dentalist is pleasure</h2>
          <p className="max-w-[620px] text-violet-dark/70">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual.
          </p>
        </div>

        {/* form to book an appointment */}
        <FormBookAppointment addStylesToForm="mt-12 mb-10" />
      </div>
    </section>
  );
};

export default BookAppointment;
