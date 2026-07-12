import React from "react";
import data from "../data.json";
import { useState } from "react";
export default function Technology() {
  const [technology, setTechnology] = useState(data.technology[0]);
  return (
    <div className="flex flex-col items-around content-center gap-10 p-5 lg:p-0">
      <div className="justify-around lg:ms-40 text-center lg:text-left">
        <p className="text-xl font-light tracking-wider uppercase font-playful font-medium ">
          <span
            className="text-gray-500 text-2xl"
          >
            03
          </span>{" "}
         Space Launch <span className="text-2xl">101</span>
        </p>
      </div>
<div className="flex flex-col lg:flex-row justify-center items-center gap-20">
  <div className="flex lg:flex-col gap-5 mt-10">
          {data.technology.map((tech, index) => (
            <button
              key={index}
              className={`w-20 h-20 rounded-full text-xl font-playful ${technology === tech ? "bg-white text-black" : "bg-transparent border border-gray-700 text-white"}`}
              onClick={() => setTechnology(tech)} 
            >
              {index + 1}
            </button>
          ))}
        </div>
      <div className="flex flex-col text-center lg:text-left justify-center gap-6">
        <p className="text-md font-light tracking-wider uppercase font-playful text-gray-500">
          The Technology...
        </p>
        <h2 className="text-4xl lg:text-5xl font-extralight uppercase font-playful">{technology.name}</h2>
        <p className="text-lg text-gray-500 max-w-md  lg:text-left mb-10 lg:mb-0">
          {technology.description}
        </p>
      </div>
<div className="order-first md:order-none lg:w-2/5">
  <img  src={`/assets/image-${technology.name.toLowerCase().replace(' ', '-')}-portrait.jpg`}  />
</div>

    </div>
    </div>
  );
}