import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';  

const MovieDetails = () => {
  const { movieId } = useParams();  
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

   
    fetch(`https://www.omdbapi.com/?apikey=e9692a7c&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovieDetails(data);
        } else {
          setError('Film non trovato');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Errore nella richiesta');
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-details text-light">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{movieDetails.Title}</h2>
       
        <Link to="/" className="btn btn-outline-light">
          Home
        </Link>
      </div>

      <img src={movieDetails.Poster} alt={movieDetails.Title} className="img-fluid" />
      <p>{movieDetails.Plot}</p>
      <p><strong>Year:</strong> {movieDetails.Year}</p>
      <p><strong>Genre:</strong> {movieDetails.Genre}</p>
      <p><strong>Director:</strong> {movieDetails.Director}</p>
      <p><strong>Actors:</strong> {movieDetails.Actors}</p>
      <p><strong>IMDB Rating:</strong> {movieDetails.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
