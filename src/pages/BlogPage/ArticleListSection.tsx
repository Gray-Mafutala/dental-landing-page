import ArticleCoverImg1 from "../../assets/images/BlogPage/article-cover-1.png";
import ArticleCoverImg2 from "../../assets/images/BlogPage/article-cover-2.png";
import ArticleCoverImg3 from "../../assets/images/BlogPage/article-cover-3.png";
import ArticleCoverImg4 from "../../assets/images/BlogPage/article-cover-4.png";
import ArticleCoverImg5 from "../../assets/images/BlogPage/article-cover-5.png";
import ArticleCoverImg6 from "../../assets/images/BlogPage/article-cover-6.png";
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

  {
    cover: ArticleCoverImg4,
    category: "Tips & trick",
    title: "New Technology Make for Dental Operation 2",
  },
  {
    cover: ArticleCoverImg5,
    category: "News",
    title: "Regular Dental care make Your Smile Brighter 2",
  },
  {
    cover: ArticleCoverImg6,
    category: "Events",
    title: "Dental Hygiene for All Age to Make Smile 2",
  },
];

const ArticleListSection = () => {
  return (
    <section className="max-w-[1300px] mx-auto flex flex-col items-center gap-y-16">
      {/* title */}
      <h2 className="text-center">Stay updated with our latest news</h2>

      {/* article list */}
      <div
        className="flex flex-col items-center justify-center gap-10
        tablet:flex-row flex-wrap"
      >
        {/* article cards */}
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

      {/* pagination buttons */}
      <div className="flex items-center justify-center gap-x-4 gap-y-6 flex-wrap">
        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-white rounded-2xl bg-violet">
          1
        </button>

        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300">
          2
        </button>

        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300">
          3
        </button>

        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300">
          4
        </button>

        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300">
          5
        </button>

        <button className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300">
          ...
        </button>

        <button
          className="text-lg w-12 aspect-square tablet:w-14 font-bold text-violet-dark rounded-2xl border border-[#eee] hover:text-white hover:bg-violet hover: hover:border-violet duration-300
          flex items-center justify-center"
        >
          <svg className="w-2 h-[14px] fill-none">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current stroke-2"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ArticleListSection;
