import React from 'react';

export default function MovieCard (props) {
  
  const { title, director, metascore, stars } = props.movie;
  const { actors } = props;

  return(
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {actors === 'true' && <h3>Actors</h3>}
      {actors === 'true' && stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
    </div>
  );
}
