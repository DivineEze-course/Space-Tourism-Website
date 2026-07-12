import React, { useState, useRef } from "react";
import data from "../data.json";

export default function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const selectedCrew = data.crew[crewIndex];

  function nextCrew() {
    setCrewIndex((prev) =>
      prev === data.crew.length - 1 ? 0 : prev + 1
    );
  }

  function previousCrew() {
    setCrewIndex((prev) =>
      prev === 0 ? data.crew.length - 1 : prev - 1
    );
  }

  function handleTouchStart(e) {
    touchStart.current = e.targetTouches[0].clientX;
    touchEnd.current = null;
  }

  function handleTouchMove(e) {
    touchEnd.current = e.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    if (
      touchStart.current === null ||
      touchEnd.current === null
    ) {
      return;
    }

    const distance = touchStart.current - touchEnd.current;

    if (distance > 50) {
      nextCrew();
    }

    if (distance < -50) {
      previousCrew();
    }

    touchStart.current = null;
    touchEnd.current = null;
  }

  return (
    <div className="flex flex-col items-around content-center gap-10 p-5 lg:p-0">
      <div className="justify-around lg:ms-40 lg:text-left text-center">
        <p className="text-xl font-light tracking-wider uppercase font-playful font-medium">
          <span className="text-gray-500 text-2xl">02</span>{" "}
          Meet Your Crew
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-30">
        <div className="flex flex-col gap-10">
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

          <div className="flex gap-5 mt-10 order-first md:order-none justify-center">
            {data.crew.map((crewMember, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  crewIndex === index
                    ? "bg-white"
                    : "bg-white/25 lg:bg-gray-700"
                }`}
                onClick={() => setCrewIndex(index)}
              />
            ))}
          </div>
        </div>

        <img
          className="order-first md:order-none w-3/4 lg:w-2/5 select-none"
          src={selectedCrew.images.png}
          alt={selectedCrew.name}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
    </div>
  );
}