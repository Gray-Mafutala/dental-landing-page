import VioletButton from "../../components/ui/VioletButton";
import DentistAndHisSmilingPatientImg from "../../assets/images/AboutPage/dentist-and-his-smiling-patient.png";

const HeroSection = () => {
  return (
    <section
      className="mt-10 max-w-[1200px] w-full mx-auto flex justify-center
      tablet:justify-between items-center gap-x-24"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1 className="whitespace-nowrap">About Us</h1>

        {/* hero image - display on tablet and mobile screens */}
        <div className="max-w-[620px] mt-12 mb-5 tablet:hidden">
          <img
            src={DentistAndHisSmilingPatientImg}
            alt="A dentist and his smiling patient"
            className="min-w-60 w-[full] h-auto object-cover"
          />
        </div>

        <p
          className="max-w-[550px] mx-auto tablet:mx-0 mt-8 mb-12 tablet:mb-16"
        >
          We want you to feel amazing about your oral wellness. Not just twice a
          year, but every time you take a bite, tell a joke, laugh, or share a
          kiss.
        </p>
        <VioletButton
          isLink={true}
          link="/contact"
          addStyles="text-center rounded-2xl after:rounded-2xl px-6 py-4
          mobileM:px-10 mobileM:py-5 self-center tablet:self-start"
        >
          Contact Us
        </VioletButton>
      </div>

      {/* right content - hero image */}
      <div className="max-w-[620px] hidden tablet:block">
        <img
          src={DentistAndHisSmilingPatientImg}
          alt="A dentist and his smiling patient"
          className="min-w-60 w-[full] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
