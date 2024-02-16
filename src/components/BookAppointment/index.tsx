import locationIcon from "../../assets/images/HomePage/location.svg";
import mapImg from "../../assets/images/HomePage/map-img.png";
import FormBookAppointment from "../FormBookAppointment";

const BookAppointment = () => {
  return (
    <section
      className="max-w-[1200px] w-full mx-auto flex flex-col gap-y-32 items-center
      laptop:flex-row laptop:justify-between laptop:items-stretch gap-x-20"
    >
      {/* left content - maps address */}
      <div className="relative order-1 laptop:order-[0]">
        {/* maps */}
        <div className="max-w-[550px] h-full">
          <img
            src={mapImg}
            alt="35 West Dental Street California 1004"
            className="w-full h-full object-cover rounded-[3rem]"
          />
        </div>

        {/* address */}
        <div
          className="flex flex-col gap-y-3 text-center mobileM:flex-row
          mobileM:text-left items-center gap-x-7 p-6 bg-white
          rounded-[2rem] absolute bottom-7 left-7 right-7 shadow-sm"
        >
          <img src={locationIcon} alt="" className="max-w-[64px]" />
          <p className="max-w-[288px] text-lg font-bold text-violet-dark">
            35 West Dental Street California 1004
          </p>
        </div>
      </div>

      {/*  right content - titles, form... */}
      <div>
        {/* top content - titles... */}
        <div className="text-center laptop:text-left">
          <span className="section-small-title">Book appointment</span>
          <h2 className="mt-4 mb-6">Care at Dentalist is pleasure</h2>
          <p className="max-w-[620px] mx-auto laptop:mx-0 text-violet-dark/70">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual.
          </p>
        </div>

        {/* form to book an appointment */}
        <FormBookAppointment addStylesToForm="mt-12" />
      </div>
    </section>
  );
};

export default BookAppointment;
