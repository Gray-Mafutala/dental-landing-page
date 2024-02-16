import VioletButton from "../../components/UI/VioletButton";
import DentalSurgeryImg from "../../assets/images/HomePage/patient-receiving-dental-treatment-1.png";

const DentalEmergency = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-14
      tablet:flex-row tablet:justify-between items-center gap-x-16"
    >
      {/* left content */}
      <div className="max-w-[550px]">
        <img
          src={DentalSurgeryImg}
          alt="Patient receiving dental treatment"
          className="min-w-60 w-full h-auto object-cover"
        />
      </div>

      {/* right content */}
      <div className="flex flex-col items-center tablet:items-start text-center tablet:text-left">
        <span className="section-small-title">Dental 24 emergency</span>

        <h2 className="max-w-[550px] mt-4 mb-6">
          Gentle, friendly treatment from our locally practice
        </h2>

        <p className="max-w-[510px] text-violet-dark/70 mb-16">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tablet:self-start">
          Book an appointment
        </VioletButton>
      </div>
    </section>
  );
};

export default DentalEmergency;
