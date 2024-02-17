import FormBookAppointment from "../../components/FormBookAppointment";

const HeroSection = () => {
  return (
    <section
      className="mobileM:px-5 bg-sky-light pt-16 rounded-[48px] flex flex-col
      items-center text-center mobileM:pb-5 tablet:pb-0 tablet:mb-[420px]"
    >
      {/* top content */}
      <h1 className="whitespace-nowrap">Contact Us</h1>
      <p className="mt-8 mb-16 max-w-[550px] text-lg font-medium text-violet-dark/70">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      {/* bottom content - form to book an appointment */}
      <FormBookAppointment
        addStylesToForm="bg-white pt-10 pb-8 px-4 mobileM:px-6 mobileXL:px-10 tablet:px-16 
        tabletL:pt-14 tabletL:pb-12 tabletL:px-24 rounded-[2rem] tablet:rounded-[3rem]
        text-left tablet:shadow-md tablet:-mb-[420px]
        w-full tablet:w-auto
        -mb-[2px] mobileM:mb-0" 
      />
    </section>
  );
};

export default HeroSection;
