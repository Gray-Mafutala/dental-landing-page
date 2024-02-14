import React from "react";

import articleCoverImg1 from "../../assets/images/HomePage/article-cover-1.png";
import articleCoverImg2 from "../../assets/images/HomePage/article-cover-2.png";
import articleCoverImg3 from "../../assets/images/HomePage/article-cover-3.png";
import ArticleCard from "../../components/ArticleCard";

const articleList = [
  {
    cover: articleCoverImg1,
    category: "Technology",
    title: "New Technology Make for Dental Operation",
  },
  {
    cover: articleCoverImg2,
    category: "Dental",
    title: "Regular Dental care make Your Smile Brighter",
  },
  {
    cover: articleCoverImg3,
    category: "Hygiene",
    title: "Dental Hygiene for All Age to Make Smile",
  },
];

const ArticleListSection = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto flex flex-col items-center
      gap-y-16"
    >
      {/* title */}
      <h2 className="text-center">Stay updated with our latest news</h2>

      {/* some articles */}
      <div
        className="flex flex-col items-center justify-center gap-10
        tablet:flex-row"
      >
        {articleList.map(({ cover, category, title }) => (
          <ArticleCard
            key={title}
            link="/blog/new-tech"
            cover={cover}
            title={title}
            category={category}
            abstract="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..."
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleListSection;
