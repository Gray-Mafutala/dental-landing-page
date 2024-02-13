import React from "react";

import Cover1 from "../../assets/images/HomePage/cover-1.png";
import Cover2 from "../../assets/images/HomePage/cover-2.png";
import Cover3 from "../../assets/images/HomePage/cover-3.png";

const articlesPreview = [
  {
    cover: Cover1,
    category: "Technology",
    title: "New Technology Make for Dental Operation",
  },
  {
    cover: Cover2,
    category: "Dental",
    title: "Regular Dental care make Your Smile Brighter",
  },
  {
    cover: Cover3,
    category: "Hygiene",
    title: "Dental Hygiene for All Age to Make Smile",
  },
];

const BlogSection = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto flex flex-col items-center
      gap-y-16"
    >
      <div className="flex flex-col gap-y-4 items-center text-center">
        <span className="section-small-title">Blog</span>
        <h2>Stay updated with our latest news</h2>
      </div>

      {/* some articles */}
      <div
        className="flex flex-col items-center justify-center gap-10
        tablet:flex-row"
      >
        {articlesPreview.map(({ cover, category, title }) => (
          <div
            key={title}
            className="rounded-[2rem] border border-[#eee] shadow-sm p-4 pb-10"
          >
            {/* cover and date */}
            <div className="w-[368px] h-[250px] mb-6 relative">
              <div className="absolute top-4 left-4 pt-1 pb-2 px-5 bg-white rounded-2xl flex flex-col items-center text-center">
                <span className="text-lg font-bold text-violet-dark">23</span>
                <span className="text-sm font-bold text-violet-dark/60">
                  Jan
                </span>
              </div>
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>

            <span className="section-small-title">{category}</span>
            <h4 className="text-lg text-violet-dark font-bold mt-2 mb-3">
              {title}
            </h4>

            <p className="text-base">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
