import React from "react";

type ArticleCardProps = {
  title: string;
  cover: string;
  category: string;
  abstract: string;
};

const ArticleCard = ({
  title,
  cover,
  category,
  abstract,
}: ArticleCardProps) => {
  return (
    <div
      key={title}
      className="max-w-[400px] rounded-[2rem] border border-[#eee]
      p-4 pb-10 cursor-pointer hover:scale-105 hover:shadow-sm duration-300"
    >
      {/* cover and date */}
      <div className="w-[368px] h-[250px] mb-6 relative">
        <div className="absolute top-4 left-4 pt-1 pb-2 px-5 bg-white rounded-2xl flex flex-col items-center text-center">
          <span className="text-lg font-bold text-violet-dark">23</span>
          <span className="text-sm font-bold text-violet-dark/60">Jan</span>
        </div>
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover rounded-[2rem]"
        />
      </div>

      <span className="section-small-title">{category}</span>
      <h4 className="text-lg text-violet-dark font-bold mt-2 mb-3">{title}</h4>

      <p className="text-base line-clamp-2">{abstract}</p>
    </div>
  );
};

export default ArticleCard;
