import authorAvatarImg from "../../assets/images/BlogPost/author-avatar.png";
import articleCoverImg from "../../assets/images/BlogPost/article-cover.png";
import articleImg1 from "../../assets/images/BlogPost/article-img-1.png";
import articleImg2 from "../../assets/images/BlogPost/article-img-2.png";

const ArticleContent = () => {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col">
      {/* title, author and abstract */}
      <div className="tablet:pl-20 mb-16">
        {/* title */}
        <span className="section-small-title">Technology</span>
        <h2 className="max-w-[710px] mt-4 mb-8 leading-[1.3]">
          New Technology Make for Better Dental Operation
        </h2>

        {/* author */}
        <div className="flex gap-x-3">
          <img
            src={authorAvatarImg}
            alt="Robert Fox"
            className="w-12 h-12 rounded-[100%] object-cover"
          />
          <p className="flex flex-col gap-y-2">
            <span className="text-base font-black text-violet-dark">
              Robert Fox
            </span>
            <span className="text-xs font-semibold text-violet-dark/70">
              12 August 2021
            </span>
          </p>
        </div>

        {/* abstract */}
        <p className="max-w-[990px] text-base font-medium text-violet-dark/70 mt-8">
          The paper discusses the use of epoxy resins in construction and repair
          of offshore concrete structures. Typical properties of resin systems
          are described, and the range of conditions encountered in practice and
          the development of a wide range of epoxy.
        </p>
      </div>

      {/* article cover image */}
      <img
        src={articleCoverImg}
        alt="New Technology Make for Better Dental Operation"
        className="w-full h-[320px] mobileXL:h-[480px] tabletL:h-[520px] laptop:h-[600px] object-cover rounded-3xl"
      />

      {/* 2 firsts content paragraphs */}
      <div className="tablet:pl-20 mt-16 flex flex-col gap-y-6">
        <p className="text-base max-w-[990px]">
          The paper discusses the use of epoxy resins in construction and repair
          of offshore concrete structures. Typical properties of resin systems
          are described, and the range of conditions encountered in practice and
          the development of a wide range of epoxy systems for a variety of
          applications are discussed. Several applications such as surface and
          underwater repairs, and the use of epoxy resins as curing membranes,
          and to seal cracks and joints are described in detail. It is shown
          that careful selection of materials and good quality of workmanship
          are essential to derive the maximum benefit from the use of epoxy
          systems. A wide range of properties could be obtained from epoxies to
          suit the requirements of the designer and the contractor.
        </p>

        <p className="text-base max-w-[960px]">
          To this day, it’s not entirely clear which seven lines the article
          referenced. The prevailing theory is that it’s the roughly seven lines
          of curl it took to create a Charge. However, a search for the seven
          lines of code ultimately misses the point: the ability to open up a
          terminal, run this curl snippet, then immediately see a successful
          credit card payment felt like seven lines of code. It’s unlikely that
          a developer believed a production-ready payments integration involved
          literally only seven lines of code. But taking something as complex as
          credit card processing and reducing.
        </p>
      </div>

      {/* title and 2 others paragraphs */}
      <div className="tablet:pl-20 mt-16 flex flex-col">
        <h3 className="text-4xl">
          How technology affecting the dental surgery?
        </h3>
        <p className="text-base max-w-[990px] mt-6 mb-6">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>
        <p className="text-base max-w-[990px]">
          To this day, it’s not entirely clear which seven lines the article
          referenced. The prevailing theory is that it’s the roughly seven lines
          of curl it took to create a Charge. However, a search for the seven
          lines of code ultimately misses the point: the ability to open up a
          terminal, run this curl snippet, then immediately see a successful
          credit card payment felt like seven lines of code. It’s unlikely that
          a developer believed a production-ready payments integration involved
          literally only seven lines of code. But taking something as complex as
          credit card processing and reducing the integration to only a few
          lines of code that, when run, immediately returns a successful Charge
          object is really quite magical.
        </p>
      </div>

      {/* 2 images */}
      <div
        className="tablet:pl-20 mt-12 flex flex-col items-center gap-y-10
        mobileXL:flex-row gap-x-10"
      >
        <div className="w-full mobileXL:max-w-[510px]">
          <img
            src={articleImg1}
            alt=""
            className="min-w-[280px] w-full h-[220px] mobileXL:h-[260px] tabletL:h-[300px] rounded-2xl object-cover"
          />
        </div>

        <div className="w-full mobileXL:max-w-[400px] -order-1 mobileXL:order-1">
          <img
            src={articleImg2}
            alt=""
            className="min-w-[190px] w-full h-[220px] mobileXL:h-[260px] tabletL:h-[300px] rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* citation paragraph */}
      <p
        className="mt-16 tablet:ml-20 p-6 mobileL:px-10 mobileL:py-12 max-w-[880px] mx-auto bg-gradient-to-r 
        from-[#dbeffa] border-l-[3px] border-l-violet"
      >
        “ Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum. Proin gravida
        nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor ”
      </p>

      {/* remaining paragraphs */}
      <div className="tablet:pl-20 mt-16 flex flex-col gap-y-8">
        <p className="text-base max-w-[990px]">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>

        <p className="text-lg font-bold">
          <span className="text-violet-dark">Related resource :</span>{" "}
          <span className="text-violet">
            What is canal root and what causing it?
          </span>
        </p>

        <p className="text-base max-w-[990px]">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>
      </div>
    </section>
  );
};

export default ArticleContent;
