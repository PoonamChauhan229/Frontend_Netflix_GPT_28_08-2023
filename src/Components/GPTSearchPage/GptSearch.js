import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMoviesSuggestion } from "./GptMoviesSuggestion";
import Banner from "../../../src/assets/Banner.jpg";

const GptSearch = () => {
  return (
    <>
      <div className="absolute">
        <img className="" src={Banner} alt="banner" />
      </div>

      <div className="absolute p-4 bg-black  my-[5%] mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40 h-screen">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
