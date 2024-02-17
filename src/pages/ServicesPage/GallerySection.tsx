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
      <div
        className="flex flex-col items-center text-center laptop:flex-row
        laptop:justify-between laptop:text-left gap-x-8 gap-y-12"
      >
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
      <div className="grid gap-10 gallery-grid">
        {gallery.map(({ photo, key }) => (
          <img
            key={key}
            src={photo}
            alt=""
            className={
              key === "photo1"
                ? "gallery-photo gallery-photo-1"
                : key === "photo2"
                ? "gallery-photo gallery-photo-2"
                : key === "photo3"
                ? "gallery-photo gallery-photo-3"
                : key === "photo4"
                ? "gallery-photo gallery-photo-4"
                : key === "photo5"
                ? "gallery-photo gallery-photo-5"
                : "gallery-photo gallery-photo-6"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
