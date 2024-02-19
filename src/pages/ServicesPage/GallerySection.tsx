import SectionHeaderAndParagraph from "../../components/SectionHeaderAndParagraph";
import Photo1 from "../../assets/images/ServicesPage/gallery-photo-1.png";
import Photo2 from "../../assets/images/ServicesPage/gallery-photo-2.png";
import Photo3 from "../../assets/images/ServicesPage/gallery-photo-3.png";
import Photo4 from "../../assets/images/ServicesPage/gallery-photo-4.png";
import Photo5 from "../../assets/images/ServicesPage/gallery-photo-5.png";
import Photo6 from "../../assets/images/ServicesPage/gallery-photo-6.png";

const gallery = [
  { photo: Photo1, key: "p1" },
  { photo: Photo2, key: "p2" },
  { photo: Photo3, key: "p3" },
  { photo: Photo4, key: "p4" },
  { photo: Photo5, key: "p5" },
  { photo: Photo6, key: "p6" },
];

const GallerySection = () => {
  return (
    <section className="section-1200 flex-col gap-y-16">
      {/* title, paragraph */}
      <SectionHeaderAndParagraph
        category="Gallery"
              title="Some proof about our services for you"
              titleStyles="max-w-[475px]"
        paragraph="Lorem ipsum is placeholder text commonly used in the graphic, print,
        and publishing industries for previewing layouts and visual mockups."
      />

      {/* Gallery photos */}
      <div className="grid gap-10 gallery-grid">
        {gallery.map(({ photo, key }) => (
          <img
            key={key}
            src={photo}
            alt=""
            className={
              key === "p1"
                ? "gallery-photo gallery-photo-1"
                : key === "p2"
                ? "gallery-photo gallery-photo-2"
                : key === "p3"
                ? "gallery-photo gallery-photo-3"
                : key === "p4"
                ? "gallery-photo gallery-photo-4"
                : key === "p5"
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
