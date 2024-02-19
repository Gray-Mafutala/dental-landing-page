import ArticleCoverImg1 from "../../assets/images/HomePage/article-cover-1.png";
import ArticleCoverImg2 from "../../assets/images/HomePage/article-cover-2.png";
import ArticleCoverImg3 from "../../assets/images/HomePage/article-cover-3.png";
import ArticleCard from "../../components/ArticleCard";

const articleList = [
  {
    cover: ArticleCoverImg1,
    category: "Technology",
    title: "New Technology Make for Dental Operation",
  },
  {
    cover: ArticleCoverImg2,
    category: "Dental",
    title: "Regular Dental care make Your Smile Brighter",
  },
  {
    cover: ArticleCoverImg3,
    category: "Hygiene",
    title: "Dental Hygiene for All Age to Make Smile",
  },
];

const BlogSection = () => {
  return (
    <section
      className="section-1200 flex-col items-center gap-y-16"
    >
      <div className="flex flex-col gap-y-4 items-center text-center">
        <span className="section-small-title">Blog</span>
        <h2>Stay updated with our latest news</h2>
      </div>

      {/* some articles */}
      <div
        className="flex flex-col items-stretch justify-center gap-10
        tabletL:flex-row"
      >
        {articleList.map(({ cover, category, title }) => (
          <ArticleCard
            key={title}
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

export default BlogSection;
