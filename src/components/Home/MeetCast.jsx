import React, { useContext } from "react";
import { RICK_CONTEXT } from "../../Context/ContextRick";
import { Link } from "react-router-dom";

const MeetCast = () => {
  const { characters } = useContext(RICK_CONTEXT);

  return (
    <div className="text-gray lg:mt-20 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className=" text-2xl font-semibold">The Meet Cast</h2>
        <Link to="/character">
          <button className="btn btn-outline btn-success lg:mr-4 mr-2 text-white capitalize">
            View All
          </button>
        </Link>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid grid-flow-col gap-6">
            {characters?.map((character) => (
              <Link to={`/character/${character.id}`}>
                <div
                  key={character.id}
                  className="card w-56 h-60 p-4 border border-green bg-base-100 shadow-xl rounded-lg cursor-pointer"
                >
                  <figure className="rounded-sm w-48 h-44 ">
                    <img src={character.image} alt="Shoes" />
                  </figure>

                  <h2 className="text-left pt-4">{character.name}</h2>
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCast;
