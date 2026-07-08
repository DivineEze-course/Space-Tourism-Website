import data from "../data.json";
import React from "react";
import { useState } from "react";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0],
  );

  return (
    <div className="flex flex-col items-around content-center gap-10">
      <div className="mb-10 -ms-180 items-center justify-around text-center">
        <p className="text-xl font-light tracking-wider uppercase font-playful font-medium ">
          <span
            className="text-gray-500 text-2
            xl"
          >
            01
          </span>{" "}
          Pick Your Destination
        </p>
      </div>
      <div className="flex justify-center items-center gap-42 ">
        <div>
          <img
            src={`image-${selectedDestination.name.toLowerCase()}.png`}
            alt={selectedDestination.name}
          />
        </div>
        <div>
          <ul className="flex gap-4">
            {data.destinations.map((destination, index) => (
              <li
                key={index}
                className="text-md font-light tracking-wider uppercase font-playful font-medium "
              >
                <p
                  onClick={() => setSelectedDestination(destination)}
                  className={`pb-2 border-b-2  ${
                    selectedDestination.name === destination.name
                      ? "border-white"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  {destination.name}
                </p>
              </li>
            ))}
          </ul>
          {selectedDestination && (
            <div className="mt-8">
              <h2 className="text-7xl font-medium font-playful uppercase">
                {selectedDestination.name}
              </h2>
              <p className="text-lg mt-4 max-w-md leading-8 text-gray-300">
                {selectedDestination.description}
              </p>
              <div className="flex gap-8 mt-6">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="text-xl font-bold">
                    {selectedDestination.distance}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Travel Time</p>
                  <p className="text-xl font-bold">
                    {selectedDestination.travel}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
