import React, { useState } from "react";
import data from "../data.json";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);
  return (
    <div className="flex flex-col items-around content-center gap-10">
    <div className="mb-10 -ms-200 items-center justify-around text-center">
        <p className="text-xl font-light tracking-wider uppercase font-playful font-medium ">
          <span
            className="text-gray-500 text-2
            xl"
          >
            02
          </span>{" "}
          Meet Your Crew
        </p>
      </div>
    <div className="flex justify-center items-center gap-30 ">
      

      <div className="flex flex-col gap-10">
        <div>
          {selectedCrew && (
            <div className="text-start">
              <p className="text-2xl font-medium font-playful uppercase text-white/50">
                {selectedCrew.role}
              </p>
              <p className="text-4xl font-light tracking-wider uppercase font-playful mt-3">
                {selectedCrew.name}
              </p>
              <p className="text-lg mt-4 max-w-md leading-8 text-gray-400">
                {selectedCrew.bio}
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-5 mt-10">
          {data.crew.map((crewMember, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${selectedCrew === crewMember ? "bg-white text-black" : "bg-gray-700 "}`}
              onClick={() => setSelectedCrew(crewMember)}
            ></button>
          ))}
        </div>
      </div>
      <img src={`/assets/image-${selectedCrew.name.toLowerCase().replace(" ", "-")}.png`} alt={selectedCrew.name} />
    </div>
    </div>
  );
}
