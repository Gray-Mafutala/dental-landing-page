type SectionHeaderAndParagraphProps = {
  category: string;
  title: string;
  paragraph: string;
  titleStyles: string;
};

/* section category, title and paragraph side-by-side */
const SectionHeaderAndParagraph = ({
  category,
  title,
  paragraph,
  titleStyles,
}: SectionHeaderAndParagraphProps) => {
  return (
    <div
      className="flex flex-col items-center text-center laptop:flex-row
        laptop:justify-between laptop:text-left gap-x-8 gap-y-12"
    >
      <div className="flex flex-col gap-y-4">
        <span className="section-small-title">{category}</span>
        <h2 className={titleStyles}>{title}</h2>
      </div>

      <p className="max-w-lg">{paragraph}</p>
    </div>
  );
};

export default SectionHeaderAndParagraph;
