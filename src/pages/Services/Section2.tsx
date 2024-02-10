import SpontaneousIcon from "../../assets/svg/HomePage/spontaneous-pain.svg";

const Section2 = () => {
  return (
    <div
      className="mt-[280px] rounded-[48px] bg-orange-light flex flex-col items-center py-24 px-4 
      tablet:px-6"
    >
      {/* titles, overview */}
      <p className="section-small-title">Symptoms</p>
      <h2 className="mt-4 mb-6 text-center">
        Sign and symptoms you need root canal
      </h2>
      <p className="text-violet-dark/80 max-w-3xl text-center">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      {/* list of symptoms */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-20 gap-y-28">
        <div className="flex items-center gap-x-6">
            <img src={SpontaneousIcon} alt="Spontaneous pain" />
            <div>
                <h4></h4>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
