import React from "react";

const FaqSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full flex flex-col gap-y-16">
      {/* titles */}
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className="section-small-title">Faq</span>
        <h2>Frequently asked question</h2>
      </div>

      {/* bottom content */}
      <div className="max-w-[920px] w-full mx-auto border-t-2 border-violet"></div>
    </section>
  );
};

export default FaqSection;
