import React, { useState } from "react";
import classNames from "classnames";

const MovieItem = props => {
  const TITLE_LIMIT = 15;
  const [isWillWatch, setWillWatch] = useState(false);

  const getWatchBtnStyles = () =>
    classNames("btn", "mt-2", { "btn-success": isWillWatch, "btn-secondary": !isWillWatch });
  const {
    willWatchClick,
    removeWillWatchClick,
    removeHandler,
    data: { title, poster_path, vote_average, id }
  } = props;

  const getPoster = path => {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : `${process.env.PUBLIC_URL}/images/404.jpg`;
  };

  const watchButton = (
    <button
      type="button"
      className={getWatchBtnStyles()}
      onClick={() => {
        isWillWatch ? removeWillWatchClick(props.data) : willWatchClick(props.data);
        setWillWatch(!isWillWatch);
      }}
    >
      {isWillWatch ? "Remove Will Watch" : "Add Will Watch"}
    </button>
  );
  return (
    <div className="card" style={{ maxWidth: "16rem" }}>
      <img className="card-img-top" src={getPoster(poster_path)} alt={title} />
      <div className="card-body">
        <h5 className="card-title" title={title}>
          {title.length > TITLE_LIMIT ? `${title.slice(0, TITLE_LIMIT)}...` : title}
        </h5>
        <p className="mb-0">Rating: {vote_average}</p>
        {watchButton}
      </div>
      <button type="button" className="btn btn-primary" onClick={() => removeHandler(id)}>
        Remove movie
      </button>
    </div>
  );
};
export default MovieItem;
