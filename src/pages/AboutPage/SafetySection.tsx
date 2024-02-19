import { useRef, useState } from "react";

import OperatingRoomImg from "../../assets/images/AboutPage/operating-room.png";
import OperatingRoomVideo from "../../assets/images/AboutPage/operating-room.mp4";

const SafetySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlayPause = () => {
    videoRef.current?.paused
      ? videoRef.current?.play()
      : videoRef.current?.pause();

    videoRef.current && setIsPaused(videoRef.current.paused);
  };

  return (
    <section
      className="max-w-[1200px] mx-auto w-full bg-violet-light rounded-[48px]
      pt-20 px-4 flex flex-col items-center gap-y-12 tablet:gap-y-24
      tablet:mb-48 pb-4 tablet:pb-0"
    >
      {/* top content */}
      <div className="text-center">
        <span className="section-small-title">Safety</span>
        <h2 className="mt-4 mb-6">We put the safety first</h2>
        <p className="max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      {/* bottom content */}
      <div className="max-w-[840px] tablet:-mb-48 rounded-[2.5rem] overflow-hidden relative">
        {isPaused ? (
          //  pause button
          <button
            onClick={togglePlayPause}
            className="w-20 h-20 rounded-full
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white flex items-center justify-center text-violet-dark
            active:bg-violet active:text-white duration-200 z-[2]"
          >
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          // play button
          <button
            onClick={togglePlayPause}
            className="w-20 h-20 rounded-full
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white/10 flex items-center justify-center text-violet-dark/10
            active:bg-violet active:text-white duration-500 transition-all z-[2]
            hover:bg-white hover:text-violet-dark"
          >
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* video */}
        <video
          ref={videoRef}
          preload="none"
          poster={OperatingRoomImg}
          loop
          className="min-w-60 w-[840px] h-auto object-cover rounded-[2.5rem] tablet:rounded-none"
        >
          <source src={OperatingRoomVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default SafetySection;
