import VioletButton from "../../components/ui/VioletButton";
import DentalSurgeryImg from "../../assets/images/HomePage/patient-receiving-dental-treatment-1.png";

const DentalEmergency = () => {
  return (
    <section
      className="section-1200 justify-center
      tablet:justify-between items-center gap-x-16"
    >
      {/* left content */}
      <div className="max-w-[550px] hidden tablet:block">
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

        {/* image display on tablet and mobile screens */}
        <div className="max-w-[550px] mt-8 mb-14 tablet:hidden">
          <img
            src={DentalSurgeryImg}
            alt="Patient receiving dental treatment"
            className="min-w-60 w-full h-auto object-cover"
          />
        </div>

        <p className="max-w-[510px] mb-16">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>

        <VioletButton
          isLink={true}
          link="/dental-landing-page#book-appointment"
          addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tablet:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>
    </section>
  );
};

export default DentalEmergency;
