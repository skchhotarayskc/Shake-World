import React from "react";
import BlurBg from "../img/7.png"
import { heroData } from "../utils/data";

export default function HomeContainer() {
  const text = document.querySelector("#changeable-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Ice cream";
    }, 0);
    setTimeout(() => {
      text.textContent = "Shake";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Mocktail";
    }, 8000);
  };

  textLoad();
  setInterval(textLoad, 12000);
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Taste Your Favourite
          <div className="relative">
            <span
              id="changeable-text"
              className="text-cyan-400 text-[3rem] lg:text-[5rem]"
            >
              Ice cream
            </span>
          </div>
          here !
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Tasty and best Quality Ice-creams, snacks, mocktails and shakes are
          available here
        </p>

        <div className="flex items-center justify-center bg-gradient-to-br from-purple-500 to-cyan-400 w-full md:w-460 px-4 py-2 rounded-md text-white">
          Popular Dishes
        </div>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={BlurBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-xl"
          alt="hero-bg"
        />

        <div className="w-full h-full top-0 left-0 absolute flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-[150px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imgSrc}
                  className="w-20 h-24 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
