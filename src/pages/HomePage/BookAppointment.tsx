import React, { useState } from "react";

import VioletButton from "../../components/UI/VioletButton";
import phoneViolet from "../../assets/images/HomePage/contact-phone-violet.svg";
import mapImg from "../../assets/images/HomePage/map-img.png";
import InputForm from "../../components/UI/InputForm";
import SelectForm from "../../components/UI/SelectForm";

type BookAppointmentData = {
  name: string;
  email: string;
  department: string;
  message: string;
};

const BookAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    service: "",
    department: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const field = e.target.name;
    const value = e.target.value;
    setAppointmentData({ ...appointmentData, [field]: value });
  };

  const sendBookAppointmentData = (data: BookAppointmentData) => {
    // processing here...
    console.log(data);
  };

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
          <div className="flex flex-col whitespace-nowrap">
            <span className="section-small-title">Dental 24H Emergency</span>
            <span className="text-violet-dark font-bold">03 482 394 123</span>
          </div>
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
        <form className="mt-12 mb-10">
          {/* name, email, services and department */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <InputForm
              id="form-book-appointment-name"
              name="name"
              placeholder="Enter your name..."
              label="Name"
              onChange={handleChange}
              value={appointmentData.name}
            />
            <InputForm
              type="email"
              name="email"
              id="form-book-appointment-email"
              placeholder="Your email address..."
              label="Email address"
              value={appointmentData.email}
              onChange={handleChange}
            />

            <SelectForm
              id="form-book-appointment-services"
              name="service"
              label="Services"
              value={appointmentData.service}
              onChange={handleChange}
              options={[
                "Select service",
                "Teeth Whitening",
                "Dentures",
                "Implants",
                "Whitening",
                "Root Canal",
              ]}
            />
            <SelectForm
              id="form-book-appointment-department"
              name="department"
              label="Department"
              value={appointmentData.department}
              onChange={handleChange}
              options={[
                "Select department",
                "Developmental & Surgical Sciences",
                "Diagnostic & Biological Sciences",
                "Primary Dental Care",
                "Restorative Sciences",
              ]}
            />
          </div>

          {/* message */}
          <div className="mt-8 flex flex-col gap-y-3">
            <label
              htmlFor="form-book-appointment-message"
              className="text-sm leading-5 font-bold tracking-[8%] uppercase"
            >
              Message
            </label>

            <textarea
              id="form-book-appointment-message"
              name="message"
              maxLength={1000}
              placeholder="Enter your message..."
              value={appointmentData.message}
              onChange={handleChange}
              className="min-h-48 text-base font-medium px-4 py-3 rounded-2xl
              border border-[#eee] text-violet-dark outline-none resize-none
              focus:shadow-[0_0_0_2px_#583fbc] focus:border-transparent 
              duration-200"
            ></textarea>
          </div>
        </form>

        {/* contact and btn to book appointment */}
        <div className="flex justify-between gap-8">
          {/* contact */}
          <div className="flex items-center gap-x-4">
            <img src={phoneViolet} alt="" className="max-w-[64px]" />
            <div className="flex flex-col whitespace-nowrap">
              <span className="section-small-title">Dental 24H Emergency</span>
              <span className="text-violet-dark font-bold">03 482 394 123</span>
            </div>
          </div>

          {/* btn to bokk appointment */}
          <VioletButton
            addStyles="rounded-2xl after:rounded-2xl px-10 py-5 self-start"
            onClick={() => sendBookAppointmentData(appointmentData)}
          >
            Book an appointment
          </VioletButton>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;