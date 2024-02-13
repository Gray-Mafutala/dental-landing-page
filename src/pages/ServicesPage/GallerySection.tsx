import React from "react";

import photo1 from "../../assets/images/ServicesPage/gallery-photo-1.png";
import photo2 from "../../assets/images/ServicesPage/gallery-photo-2.png";
import photo3 from "../../assets/images/ServicesPage/gallery-photo-3.png";
import photo4 from "../../assets/images/ServicesPage/gallery-photo-4.png";
import photo5 from "../../assets/images/ServicesPage/gallery-photo-5.png";
import photo6 from "../../assets/images/ServicesPage/gallery-photo-6.png";

const gallery = [
  { photo: photo1, key: "photo1" },
  { photo: photo2, key: "photo2" },
  { photo: photo3, key: "photo3" },
  { photo: photo4, key: "photo4" },
  { photo: photo5, key: "photo5" },
  { photo: photo6, key: "photo6" },
];

const GallerySection = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-16">
      {/* title, paragraph */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-4">
          <span className="section-small-title">Gallery</span>
          <h2 className="max-w-[475px]">
            Some proof about our services for you
          </h2>
        </div>

        <p className="max-w-xl text-violet-dark/70">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* Gallery photos */}
      <div className="grid grid-cols-4 gap-10">
        {gallery.map(({ photo, key }) => (
          <img
            key={key}
            src={photo}
            alt=""
            className={
              key === "photo1" || key === "photo6"
                ? "col-span-2 w-full h-[300px] object-cover rounded-[2rem]"
                : " w-full h-[300px] object-cover rounded-[2rem]"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
