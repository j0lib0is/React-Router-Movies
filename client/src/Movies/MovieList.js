import React from 'react';

import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {

  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;

  return (
    <Link to={`/movies/${id}`}>
      <MovieCard movie={props.movie} actors='false' />
    </Link>
  );
}
