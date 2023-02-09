import React, { useState } from "react";

const Location = () => {
  const [locations, setLocations] = useState([]);

  fetch("https://rickandmortyapi.com/api/location")
    .then((res) => res.json())
    .then((data) => setLocations(data.results));

  return (
    <div className="text-gray lg:my-20 my-10 ">
      <h2 className="text-left text-2xl mb-6 font font-semibold">Locations</h2>
      <div className="carousel w-full">
        <div id="slideee1" className="carousel-item relative w-full">
          <div className="grid grid-flow-col auto-cols-{3} gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className="card w-64 h-20 p-3 text-left border border-green bg-base-100 shadow-xl rounded-lg"
              >
                <h3 className="text-lg">#{location.id}</h3>
                <h2 className="text-xl font-semibold">{location.name}</h2>
              </div>
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideee4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideee2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slideee2" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideee1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideee3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slideee3" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideee2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideee4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slideee4" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideee3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideee1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
