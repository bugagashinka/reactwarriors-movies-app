import React from "react";

const MovieListWillWatch = props => {
  return (
    <section>
      <div className="text-center h5">Will watch: {props.list.length} movies</div>
      <ul className="list-group mb-4">
        {props.list.map(movie => (
          <li key={movie.id} className="list-group-item">
            {movie.title}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary btn-block" onClick={props.clearWillWatchClick}>
        Clear list
      </button>
    </section>
  );
};

export default MovieListWillWatch;
