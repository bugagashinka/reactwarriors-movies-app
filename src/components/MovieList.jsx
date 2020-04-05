import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ list: movieList, removeWillWatchClick, willWatchClick, onDelete }) => {
  return movieList.map(movieData => {
    return (
      <div className="col-4 mb-4" key={movieData.id}>
        <MovieItem
          data={movieData}
          removeHandler={onDelete}
          removeWillWatchClick={removeWillWatchClick}
          willWatchClick={willWatchClick}
        />
      </div>
    );
  });
};
export default MovieList;
