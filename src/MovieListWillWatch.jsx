import React from "react";

const MovieListWillWatch = ({ list, clearWillWatchClick }) => {
  const movieItemList = list.map((movie) => (
    <li key={movie.id} className="list-group-item">
      {movie.title}
    </li>
  ));
  return (
    <section>
      <div className="text-center h5">Will watch: {list.length} movies</div>
      <ul className="list-group mb-4">{movieItemList}</ul>
      <button type="button" className="btn btn-primary btn-block" onClick={clearWillWatchClick}>
        Clear list
      </button>
    </section>
  );
};

export default MovieListWillWatch;
