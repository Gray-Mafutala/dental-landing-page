import YoungAsianFemaleDentistImg from "../../assets/images/HomePage/young-asian-female-dentist.png";
import VioletCircleOk from "../../assets/images/HomePage/violet-circle-ok.svg";

const ExpertsInDental = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-14
      tablet:flex-row tablet:justify-between items-center gap-x-16"
    >
      {/* left content */}
      <div className="flex flex-col gap-y-8">
        {/* top title, paragraph... */}
        <div className="flex flex-col text-center tablet:text-left">
          <span className="section-small-title">Experts in dental</span>
          <h2 className="max-w-[590px] mt-4 mb-6">
            Top-notch dentistry, from Seattle's top dentists
          </h2>
          <p
            className="max-w-[510px] font-medium text-violet-dark/70
            mx-auto tablet:mx-0"
          >
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
        </div>

        {/* bottom list */}
        <ul
          className="flex flex-col items- tablet:items-start gap-y-4 text-violet-dark/90
        mx-auto tablet:mx-0"
        >
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Top quality dental team</span>
          </li>
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>State of the art dental services</span>
          </li>
          <li className="flex gap-x-3 items-center whitespace-nowrap">
            <img src={VioletCircleOk} alt="" />
            <span>Discount on all dental treatment</span>
          </li>
        </ul>
      </div>

      {/* right content */}
      <div className="max-w-[550px]">
        <img
          src={YoungAsianFemaleDentistImg}
          alt="Young asian female dentist"
          className="min-w-60 w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ExpertsInDental;
