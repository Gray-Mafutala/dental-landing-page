import React from "react";

import Avatar1 from "../../assets/images/HomePage/avatar-1.png";
import Avatar2 from "../../assets/images/HomePage/avatar-2.png";
import Avatar3 from "../../assets/images/HomePage/avatar-3.png";
import StarRating from "../../components/UI/StarRating";

const testimonials = [
  {
    avatar: Avatar1,
    fullName: "Robert Fox",
    starCount: 4,
  },
  {
    avatar: Avatar2,
    fullName: "Albert Flores",
    starCount: 4,
  },
  {
    avatar: Avatar3,
    fullName: "Bessie Cooper",
    starCount: 4,
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-sky-light rounded-[48px] pt-20 px-24 pb-20
      flex flex-col items-center gap-y-14"
    >
      {/* title, paragraph */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-4">
          <span className="section-small-title">Testimonials</span>
          <h2 className="max-w-md">What people have said about us</h2>
        </div>

        <p className="max-w-[480px] text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts.
        </p>
      </div>

      {/* testimonials */}
      <div
        className="flex flex-col items-center justify-center gap-10
        tablet:flex-row mt-10"
      >
        {testimonials.map(({ avatar, fullName, starCount }, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-[2rem]
            pb-8 px-6 gap-y-6 bg-white shadow-sm"
          >
            <img
              src={avatar}
              alt=""
              className="w-20 h-20 rounded-full object-cover border-8
              border-sky-light box-content -mt-10"
            />

            {/* fullname and paragraph */}
            <div className="flex flex-col items-center gap-y-2 text-center">
              <span
                className="text-lg font-bold -tracking-[0.4px]
              text-violet-dark"
              >
                {fullName}
              </span>
              <p className="text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts
              </p>
            </div>

            {/* star rating */}
            <div className="flex items-center gap-x-2 whitespace-nowrap">
              <StarRating starCount={starCount} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
