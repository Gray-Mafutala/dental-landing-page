import VioletButton from "../../components/UI/VioletButton";
import HeroImg from "../../assets/images/ServicesPage/two-dentists-and-a-patient.png";

const HeroSection = () => {
  return (
    <section
      className="px-5 mobileM:px-6 bg-sky-light flex justify-center
      items-center rounded-[48px] gap-x-10 tabletM:pl-24 tabletM:pr-8 py-10
      laptopM:mb-40 laptopM:py-20"
    >
      {/* left content */}
      <div
        className="flex flex-col items-center text-center tabletL:items-start
        tabletL:text-left"
      >
        <h1>Root canals</h1>

        {/* hero image - display on tablet and mobile screens */}
        <div
          className="maw-w-[730px] tabletL:hidden justify-center
          mt-12 mb-5"
        >
          <img
            src={HeroImg}
            alt="Dental surgery"
            className="min-w-60 w-full h-auto object-cover"
          />
        </div>

        <p className="max-w-[490px] mt-8 mb-14 text-violet-dark/70">
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </p>

        <VioletButton
          isLink={false}
          addStyles="rounded-2xl after:rounded-2xl px-6 py-4 mobileM:px-10 mobileM:py-5 tabletL:self-start"
        >
          Book an appointment
        </VioletButton>
      </div>

      {/* right content - hero image */}
      <div className="maw-w-[730px] hidden tabletL:flex justify-center laptopM:-mb-52">
        <img
          src={HeroImg}
          alt="Dental surgery"
          className="min-w-60 w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
