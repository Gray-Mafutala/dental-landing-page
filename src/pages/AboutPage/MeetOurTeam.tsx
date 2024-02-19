import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import DianneRussellPhoto from "../../assets/images/AboutPage/dianne-russell.png";
import EstherHoward from "../../assets/images/AboutPage/esther-howard.jpg";
import DarrellSteward from "../../assets/images/AboutPage/darrell-steward.png";
import JennyWilson from "../../assets/images/AboutPage/jenny-wilson.png";

const teamMembers = [
  { photo: DianneRussellPhoto, name: "Dianne Russell", bgColor: "#dbeffa" },
  { photo: EstherHoward, name: "Esther Howard", bgColor: "#dbdefa" },
  { photo: DarrellSteward, name: "Darrell Steward", bgColor: "#f6dbfa" },
  { photo: JennyWilson, name: "Jenny Wilson", bgColor: "#fadbe2" },
];

const MeetOurTeam = () => {
  return (
    <section className="section-1200 flex-col gap-y-16">
      {/* title, paragraph */}
      <SectionHeaderAndParagraph
        category="Meet our team"
        titleStyles="max-w-[540px]"
        title="Get to know the dentalist dental Team"
        paragraph="Lorem ipsum is placeholder text commonly used in the graphic, print,
        and publishing industries for previewing layouts and visual mockups."
      />

      {/* team members */}
      <div
        className="grid grid-cols-1 content-center 
        mobileXL:grid-cols-2 laptop:grid-cols-4 gap-10"
      >
        {teamMembers.map(({ photo, name }) => (
          <div key={name} className="flex flex-col items-center gap-y-6">
            <img
              src={photo}
              alt={name}
              className="w-[290px] h-[350px] object-cover rounded-[2rem] shadow-sm"
            />
            <span className="text-lg font-bold -tracking-[0.4px] text-violet-dark">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
