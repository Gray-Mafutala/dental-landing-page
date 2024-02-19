import SontaneousPainIcon from "../../assets/images/ServicesPage/sontaneous-pain.svg";
import DiscolorationOfToothIcon from "../../assets/images/ServicesPage/discoloration-of-tooth.svg";
import MiddleNightPainIcon from "../../assets/images/ServicesPage/middle-night-pain.svg";
import TendernessInGumsIcon from "../../assets/images/ServicesPage/tenderness-in-gums.svg";
import ExtremeSensitivityIcon from "../../assets/images/ServicesPage/extreme-sensitivity.svg";

const symptoms = [
  {
    img: SontaneousPainIcon,
    title: "Spontaneous pain",
    desc: "Spontaneous pain even when you’re not eating or drinking.",
  },
  {
    img: DiscolorationOfToothIcon,
    title: "Discoloration of tooth",
    desc: "Darkening or discoloration of a tooth.",
  },
  {
    img: MiddleNightPainIcon,
    title: "Middle night pain",
    desc: "Pain that wakes you up in the middle of the night.",
  },
  {
    img: TendernessInGumsIcon,
    title: "Tenderness in gums",
    desc: "From floss bosses to sweet tooths, every mouth is welcome.",
  },
  {
    img: ExtremeSensitivityIcon,
    title: "Extreme sensitivity",
    desc: "Extreme sensitivity to cold or heat when your’e drink or eat.",
  },
];

const SymptomsSection = () => {
  return (
    <section
      className="bg-orange-light rounded-[48px] pt-20 px-24 pb-16
      flex flex-col items-center gap-y-14"
    >
      {/* top content */}
      <div className="flex flex-col items-center text-center">
        <span className="section-small-title">Symptoms</span>
        <h2 className="mt-4 mb-6">Sign and symptoms you need root canal</h2>
        <p className="max-w-[848px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* bottom content */}
      <div className="grid grid-cols-1 tabletL:grid-cols-2 gap-12">
        {symptoms.map(({ img, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-6
            mobileXL:flex-row mobileXL:text-left"
          >
            <img src={img} alt={title} className="w-24 h-auto object-cover" />

            <div className="flex flex-col gap-y-2">
              <h3>{title}</h3>
              <p className="tabletL:w-72 text-violet-dark/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SymptomsSection;
