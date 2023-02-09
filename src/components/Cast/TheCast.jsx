import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const TheCast = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <div className="text-gray ">
      <div className="flex justify-center mt-6 lg:mb-28 mb-14">
        <img src={logo} alt="" className="w-56 h-12 " />
      </div>
      <div className="flex justify-between mb-3">
        <h2 className="text-left lg:text-4xl text-2xl text-green mb-6 font font-semibold TheCast_Head">
          The Cast
        </h2>
        <div className="form-control ">
          <label className="input-group input-group-md ">
            <span className="bg-green">Location</span>
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-md text-gray"
            />
          </label>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 mb-14">
        {characters?.map((character) => (
          <Link to={`/character/${character.id}`}>
            {" "}
            <div
              key={character.id}
              className="card lg:w-56 w-44 lg:h-60 h-44 lg:p-4 p-2 border border-green bg-base-100 shadow-xl rounded-lg"
            >
              <figure className="rounded-sm lg:w-48 w-40 lg:h-44 h-40 flex justify-center">
                <img src={character.image} alt="Shoes" />
              </figure>

              <h2 className="text-left lg:pt-4 pt-2">{character.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TheCast;
