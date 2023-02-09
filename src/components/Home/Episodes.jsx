import React, { useEffect, useState } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  console.log(episodes);
  return (
    <div className="text-gray lg:mt-20 mt-10">
      <h2 className="text-left text-2xl mb-6 font font-semibold">Episodes</h2>
      <div className="carousel w-full">
        <div id="slidee1" className="carousel-item relative w-full">
          <div className="grid grid-flow-col auto-cols-{3} gap-6">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="card w-64 h-20 p-3 text-left border border-green bg-base-100 shadow-xl rounded-lg"
              >
                <h3 className="text-lg">{episode.episode}</h3>
                <h2 className="text-xl font-semibold">{episode.name}</h2>
              </div>
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slidee4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slidee2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slidee2" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slidee1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slidee3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slidee3" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slidee2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slidee4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slidee4" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slidee3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slidee1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
