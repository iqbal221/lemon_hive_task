import logo from "../../assets/Logo.png";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const CastProfile = () => {
  const characterData = useLoaderData();
  console.log(characterData);

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-6 lg:mb-28 mb-10">
        <img src={logo} alt="" className="w-56 h-12 " />
      </div>
      <div>
        <div className="flex items-center lg:flex-row flex-col my-24">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-center text-3xl pb-4 text-green">
              {characterData.name}
            </h2>
            <div
              key={characterData.id}
              className="card w-80 h-80 p-6 mx-auto border border-green bg-base-100 shadow-xl rounded-lg"
            >
              <figure className="rounded-sm w-68 h-72 ">
                <img src={characterData.image} alt="Shoes" />
              </figure>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:my-0 my-14">
            <div className="grid grid-cols-3 lg:gap-4 gap-7 text-gray">
              <div
                key={characterData.id}
                className="card lg:w-48 w-24 lg:h-28 h-20 lg:p-7 p-4 text-left border border-green bg-base-100 shadow-xl rounded-lg"
              >
                <h3 className="text-sm capitalize">status</h3>
                <h2 className="text-xl font-semibold">
                  {characterData.status}
                </h2>
              </div>
              <div
                key={characterData.id}
                className="card lg:w-48 w-24 lg:h-28 h-20 lg:p-7 p-4 text-left border border-green bg-base-100 shadow-xl rounded-lg"
              >
                <h3 className="text-sm capitalize">species</h3>
                <h2 className="text-xl font-semibold">
                  {characterData.species}
                </h2>
              </div>
              <div
                key={characterData.id}
                className="card lg:w-48 w-24 lg:h-28 h-20 lg:p-7 p-4 text-left border border-green bg-base-100 shadow-xl rounded-lg"
              >
                <h3 className="text-sm capitalize">gender</h3>
                <h2 className="text-xl font-semibold">
                  {characterData.gender}
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-1  text-gray mt-6">
              <div className="card w-full h-28 p-7 text-left border border-green bg-base-100 shadow-xl rounded-lg">
                <h3 className="text-sm capitalize">Origin</h3>
                <h2 className="text-xl font-semibold">
                  {characterData.origin.name}
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-1  text-gray mt-6">
              <div className="card w-full h-28 p-7 text-left border border-green bg-base-100 shadow-xl rounded-lg">
                <h3 className="text-sm capitalize">Last known Location</h3>
                <h2 className="text-xl font-semibold">
                  {characterData.location.name}
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-1  text-gray mt-6">
              <div className="card w-full h-56 overflow-y-auto p-7 text-left border border-green bg-base-100 shadow-xl rounded-lg">
                <h3 className="text-sm capitalize">Episode(5)</h3>
                <ul className="mt-3">
                  {episodes.map((episode) => (
                    <li key={episode.id}>
                      <h2 className="text-xl font-semibold">{episode.name}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastProfile;
