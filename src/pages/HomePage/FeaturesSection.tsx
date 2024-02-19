import SafetyFirstIcon from "../../assets/images/HomePage/safety-first.svg";
import InsuranveAcceptedIcon from "../../assets/images/HomePage/insurance-accepted.svg";
import FullServiceIcon from "../../assets/images/HomePage/full-service-dentistry.svg";
import NoJudgmentIcon from "../../assets/images/HomePage/no-judgment-ever.svg";

const features = [
  {
    img: SafetyFirstIcon,
    title: "Safety first",
    desc: "We prioritize safety with health checks and more",
  },
  {
    img: InsuranveAcceptedIcon,
    title: "Insurance accepted",
    desc: "We’re in network with major insurers like Delta Dental, Aetna, and Cigna.",
  },
  {
    img: FullServiceIcon,
    title: "Full-service dentistry",
    desc: "Our clinic offer a full of dental service, from exams to implants and veneers.",
  },
  {
    img: NoJudgmentIcon,
    title: "No judgment ever",
    desc: "From floss bosses to sweet tooths, every mouth is welcome.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="bg-violet-light rounded-[48px] pt-20 px-24 pb-16
      flex flex-col items-center gap-y-14"
    >
      {/* top content */}
      <div className="flex flex-col text-center mobileXL:text-left">
        <span className="section-small-title">Features</span>
        <h2 className="mt-4 mb-6">Specialized care through experience</h2>
        <p className="max-w-[848px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* bottom content */}
      <div className="grid grid-cols-1 tabletL:grid-cols-2 gap-12">
        {features.map(({ img, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-6
            mobileXL:flex-row mobileXL:text-left"
          >
            <img src={img} alt={title} className="w-24 h-auto object-cover" />

            <div className="flex flex-col gap-y-2">
              <h3>{title}</h3>
              <p className="tabletL:max-w-72 text-violet-dark/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
