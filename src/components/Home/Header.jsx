import React from "react";
import logo from "../../assets/Logo.png";
import portal from "../../assets/portal.png";
import bubble from "../../assets/bubble.png";
import Gun from "../../assets/Gun.png";

const Header = () => {
  return (
    <div className="text-white header">
      <div className="flex justify-center mt-6 lg:mb-24 mb-12 ">
        <img src={logo} alt="" className="w-56 h-12 " />
      </div>
      <div>
        <div className="text-gray">
          <img
            src={bubble}
            alt=""
            className="absolute lg:w-56 w-20 lg:h-56 h-20 lg:translate-x-28 -translate-x-2 lg:-translate-y-20  -translate-y-8  z-10"
          />
          <img
            src={portal}
            alt=""
            className="absolute lg:w-56 w-16 lg:h-36 h-12 lg:translate-x-[435px] translate-x-28 lg:-translate-y-16"
          />
          <div className="flex justify-center ">
            <h1 className="lg:text-8xl text-5xl font-bold relative ">
              The{" "}
              <span className="lg:ml-52 ml-14 italic text-green">Rick & </span>{" "}
              <br></br>
              <span className="lg:mr-8 italic text-green">MORTY</span>WIKI
            </h1>
          </div>

          <img
            src={Gun}
            alt=""
            className="absolute lg:w-64 w-36 lg:h-72 h-40 lg:translate-x-[900px] translate-x-72 lg:-translate-y-48 -translate-y-10"
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-center my-10 ">
          <button className="btn bg-green text-gray rounded-3xl watch w-40 lg:mt-0 mt-10">
            Watch Now
          </button>
          <p className="lg:w-[364px] w-64 lg:h-[51px]  text-sm text-green lg:pl-14 pl-0">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
