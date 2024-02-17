import DoctorAndNursePerformingAPatientImg from "../../assets/images/AboutPage/doctor-and-nurse-performing-a-dental-procedure-on-a-patient.png";
import VioletButton from "../../components/UI/VioletButton";

const OurPrioritySection = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full flex justify-center 
      tablet:justify-between items-center gap-x-16"
    >
      {/* left content */}
      <div className="flex flex-col">
        <span className="section-small-title">Our priority</span>

        <h2 className="tablet:max-w-[395px] mt-4 mb-6">
          Our clients are our priority
        </h2>

        {/* image display on tablet and mobile screens */}
        <div className="max-w-[550px] mt-8 mb-14 tablet:hidden">
          <img
            src={DoctorAndNursePerformingAPatientImg}
            alt="Doctor and nurse performing a dental procedure on a patient"
            className="min-w-60 w-full h-auto object-cover"
          />
        </div>

        <p
          className="max-w-[510px] mx-auto tablet:mx-0 text-violet-dark/70 mb-14"
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton
          isLink={true}
          link="/contact"
          addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
          mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>

      {/* right content */}
      <div className="max-w-[550px] hidden tablet:block">
        <img
          src={DoctorAndNursePerformingAPatientImg}
          alt="Doctor and nurse performing a dental procedure on a patient"
          className="min-w-60 w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default OurPrioritySection;
