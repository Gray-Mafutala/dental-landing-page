import SearchBar from "../../components/UI/SearchBar";
import newsAndArticleImg from "../../assets/images/BlogPage/news-and-article-img.png";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center gap-x-16">
      {/* left content */}
      <div>
        <h1>News & articles</h1>
        <p className="max-w-[480px] mt-8 mb-16">
          Stays updated with our latest blog and news and get healthy tips &
          trick for oral health
        </p>

        {/* SearchBar */}
        <SearchBar />
      </div>

      {/* right content */}
      <div className="max-w-[620px]">
        <img
          src={newsAndArticleImg}
          alt="News and article about dentition"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection