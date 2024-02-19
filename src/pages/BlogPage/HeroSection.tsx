import SearchBar from "../../components/SearchBar";
import NewsAndArticleImg from "../../assets/images/BlogPage/news-and-article-img.png";

const HeroSection = () => {
  return (
    <section
      className="mt-6 max-w-[1200px] w-full mx-auto flex justify-center
      items-center gap-x-16"
    >
      {/* left content */}
      <div className="flex flex-col">
        <h1 className="-order-2">News & articles</h1>

        {/* hero image - display on tablet and mobile screens */}
        <div className="max-w-[620px] mb-10 tablet:hidden">
          <img
            src={NewsAndArticleImg}
            alt="News and article about dentition"
            className="min-w-60 w-full h-auto object-cover"
          />
        </div>

        <p className="max-w-[480px] mx-auto tablet:mx-0 mt-8 mb-16">
          Stays updated with our latest blog and news and get healthy tips &
          trick for oral health.
        </p>

        {/* SearchBar */}
        <SearchBar
          addStyles="-order-1 tablet:self-stretch tablet:order-1
          mt-8 mb-10 tablet:mb-0"
        />
      </div>

      {/* right content - hero image */}
      <div className="max-w-[620px] hidden tablet:block">
        <img
          src={NewsAndArticleImg}
          alt="News and article about dentition"
          className="min-w-60 w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
