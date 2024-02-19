import ClinicImg1 from "../../assets/images/ContactPage/clinic-img-1.png";
import ClinicImg2 from "../../assets/images/ContactPage/clinic-img-2.png";
import MapImg from "../../assets/images/ContactPage/map-img.png";

const addresses = [
  {
    imgClinic: ClinicImg1,
    nameClinic: "Dentalist Main Clinic",
    address: "35 West Dental Street California 1004",
    key: "a1",
  },
  {
    imgClinic: ClinicImg2,
    nameClinic: "Dentalist Main Clinic",
    address: "35 West Dental Street California 1004",
    key: "b2",
  },
];

const OurClinicSection = () => {
  return (
    <section className="flex flex-col items-center text-center">
      {/* titles */}
      <span className="section-small-title">Our clinic</span>
      <h2 className="mt-4 mb-16">
        Come to our clinic and get best dental services
      </h2>

      {/* bottom content */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* address card */}
        {addresses.map(({ imgClinic, nameClinic, address, key }) => (
          <div
            key={key}
            className="flex flex-col items-center p-4 pb-6 rounded-[2rem] 
            border border-[#eee] gap-y-6"
          >
            {/* image and map */}
            <div className="flex gap-x-4 justify-center max-h-[250px]">
              <div className="max-w-64">
                <img
                  src={imgClinic}
                  alt={`Clinic - ${address}`}
                  className="min-w-[160px] w-full h-full rounded-l-[2rem]"
                />
              </div>

              {/* put maps here */}
              <div className="max-w-36">
                <img
                  src={MapImg}
                  alt=""
                  className="min-w-[80px] w-full h-full rounded-r-[2rem]"
                />
              </div>
            </div>

            {/* address */}
            <p className="flex flex-col gap-y-3">
              <span className="text-lg text-violet-dark font-bold">
                {nameClinic}
              </span>
              <span className="font-medium text-violet-dark/70">{address}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClinicSection;
