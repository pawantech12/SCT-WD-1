import React from "react";
import hero from "../img/hero.jpg";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 text-center gap-6">
      <h2 className="text-5xl font-bold text-neutral-200">
        Landing template for startups
      </h2>
      <p className="text-slate-400 text-2xl w-2/3">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div className="flex gap-3 items-center text-lg font-semibold">
        <button className="bg-indigo-500 text-white py-3 px-7 hover:bg-indigo-600 rounded-md">
          Start free trial
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-950 text-white py-3 px-7 rounded-md">
          Learn more
        </button>
      </div>
      <div className="w-1/2 mt-5 relative">
        <img src={hero} alt="" className="rounded-md" />
        <button className="absolute top-[45%] left-[45%] bg-white p-5 rounded-full">
          <FaPlay className=" text-indigo-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
