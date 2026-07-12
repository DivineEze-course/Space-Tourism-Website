import React, { useState } from "react";
import data from "../data.json";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);
  return (
    <div className="flex flex-col items-around content-center gap-10 p-5 lg:p-0">
    <div className="justify-around lg:ms-40 lg:text-left text-center" >
        <p className="text-xl font-light tracking-wider uppercase font-playful font-medium ">
          <span
            className="text-gray-500 text-2xl"
          >
            02
          </span>{" "}
          Meet Your Crew
        </p>
      </div>
    <div className="flex flex-col md:flex-row justify-center items-center lg:gap-30 ">

      <div className="flex flex-col gap-10 ">
        <div>
          {selectedCrew && (
            <div className="text-center lg:text-left">
              <p className="text-2xl font-medium font-playful uppercase text-white/50">
                {selectedCrew.role}
              </p>
              <p className="text-4xl font-light tracking-wider uppercase font-playful mt-3">
                {selectedCrew.name}
              </p>
              <p className="text-lg mt-4 max-w-md leading-8 text-gray-400 mb-15 lg:mb-0">
                {selectedCrew.bio}
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-5 mt-10 order-first md:order-none justify-center">
          {data.crew.map((crewMember, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${selectedCrew === crewMember ? "bg-white text-black" : "bg-white/25 lg:bg-gray-700 "}`}
              onClick={() => setSelectedCrew(crewMember)}
            ></button>
          ))}
        </div>
      </div>
      <img className="order-first md:order-none w-3/4 lg:w-2/5" src={selectedCrew.images.png} alt={selectedCrew.name} />
    </div>
    </div>
  );
}
