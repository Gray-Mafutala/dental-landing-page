import StarGray from "../../assets/images/HomePage/star-gray.svg";
import StarOrange from "../../assets/images/HomePage/star-orange.svg";

type StarRatingProps = {
  starCount: number;
};

const StarRating = ({ starCount }: StarRatingProps) => {
  const getArrayWithStarsCount = (count: number) => {
    const result = [1, 0, 0, 0, 0];
    for (let i = 1; i < count; i++) {
      result[i] = 1;
    }

    return result;
  };

  return (
    <>
      {getArrayWithStarsCount(starCount).map((val, index) =>
        val === 1 ? (
          <img key={index} src={StarOrange} alt="" className="w-6 h-6 object-cover" />
        ) : (
          <img key={index} src={StarGray} alt="" className="w-6 h-6 object-cover" />
        )
      )}
    </>
  );
};

export default StarRating;
