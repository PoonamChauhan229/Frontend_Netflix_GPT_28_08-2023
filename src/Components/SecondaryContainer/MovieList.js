// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'thin' }}>
        <div className='flex'>
          {movies?.map((element) => (
            <MovieCard key={element.id} poster_path={element.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
