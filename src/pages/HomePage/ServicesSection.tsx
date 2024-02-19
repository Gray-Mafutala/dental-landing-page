import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import DenturesIcon from "../../assets/images/HomePage/dentures.svg";
import ImplantsIcon from "../../assets/images/HomePage/implants.svg";
import WhiteningIcon from "../../assets/images/HomePage/whitening.svg";
import RootCanalIcon from "../../assets/images/HomePage/root-canal.svg";

const services = [
  {
    img: DenturesIcon,
    service: "Dentures",
    color: "bg-sky-light",
  },
  {
    img: ImplantsIcon,
    service: "Implants",
    color: "bg-violet-light",
  },
  {
    img: WhiteningIcon,
    service: "Whitening",
    color: "bg-fuchsia-light",
  },
  {
    img: RootCanalIcon,
    service: "Root Canal",
    color: "bg-orange-light",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-1200 flex-col">
      {/* title, paragraph */}
      <SectionHeaderAndParagraph
        category="Services"
        title="Feel amazing about your oral health"
        titleStyles="max-w-[425px]"
        paragraph="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />

      {/* list of services */}
      <div
        className="mt-16 mb-14 grid grid-cols-1
        mobileXL:grid-cols-2 laptop:grid-cols-4 gap-10
        justify-items-center laptop:justify-items-stretch"
      >
        {services.map(({ img, service, color }) => (
          <div
            key={service}
            className="max-w-[480px] rounded-[32px] border border-[#eee]
            flex flex-col gap-y-6 p-3 pb-6 mobileM:p-4 mobileM:pb-8
            cursor-pointer hover:shadow-[] duration-300"
          >
            <div
              className={`${color} rounded-[32px] px-20 py-12 flex items-center justify-center`}
            >
              <img
                src={img}
                alt={service}
                className="min-w-[96px] min-h-[96px] object-cover"
              />
            </div>

            <div className="flex flex-col items-center text-center gap-y-2">
              <h3>{service}</h3>
              <p className="text-violet-dark/60 text-base">
                Lorem ipsum is placeholder text commonly used in the...
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-violet-light text-violet font-bold py-5 px-8
        rounded-2xl self-center flex items-center gap-x-4 group
        hover:bg-violet hover:text-white duration-300 ease-in"
      >
        View all service list
        <svg className="group w-6 h-6 fill-none">
          <circle
            cx="12"
            cy="12"
            r="12"
            className="fill-[#583fbc] group-hover:fill-white duration-300 ease-in"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11 8 4 4-4 4"
            className="stroke-[2] stroke-white group-hover:stroke-violet duration-300 ease-in"
          />
        </svg>
      </button>
    </section>
  );
};

export default ServicesSection;
