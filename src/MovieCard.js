import React from "react";

const MovieCard = ({ title, image }) => (
  <div className="movie-card">
    <img
      className="img-movie"
      src={"https://image.tmdb.org/t/p/w440_and_h660_face/" + image}
      alt="movie poster"
    />
    <p className="caption">{title}</p>
  </div>
);

export default MovieCard;
