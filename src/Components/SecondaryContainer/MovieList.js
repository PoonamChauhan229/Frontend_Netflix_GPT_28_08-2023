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
            <MovieCard 
            movieid={element.id}
            key={element.id} poster_path={element.poster_path} videoTrailer={element?.videoTrailer[0]?.key}
            original_title={element.original_title} original_name={element.original_name}
            media_type={element.media_type}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
