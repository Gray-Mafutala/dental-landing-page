import React from "react";
import FaqAccordion from "../../components/UI/FaqAccordion ";

const FaqSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-16">
      {/* titles */}
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className="section-small-title">Faq</span>
        <h2>Frequently asked question</h2>
      </div>

      {/* Faq accordion */}
      <div
        className="max-w-[920px] w-full mx-auto
        [&>div:first-of-type]:border-t [&>div:first-of-type]:border-t-[#96a0b5]"
      >
        <FaqAccordion
          question="Is there any cost or obligation if l request an offer?"
          answer="I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors."
        />

        <FaqAccordion
          question="What kind of construction services will be purchased?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consectetur aliquid temporibus porro, enim explicabo unde animi soluta
          vel mollitia."
        />

        <FaqAccordion
          question="How Do I Print My Auto Insurance ID Card?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consectetur aliquid temporibus porro, enim explicabo unde animi soluta
          vel mollitia."
        />

        <FaqAccordion
          question="How Do I Know What Deductible Applies To My Policy?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consectetur aliquid temporibus porro, enim explicabo unde animi soluta
          vel mollitia."
        />

        <FaqAccordion
          question="If I Am Moving, Will I Need To Request A New Agent?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consectetur aliquid temporibus porro, enim explicabo unde animi soluta
          vel mollitia."
        />
      </div>
    </section>
  );
};

export default FaqSection;
