import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Loader from './Loader'; 
import Alert from './Alert'; 

const TVShows = ({ searchQuery, title }) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://www.omdbapi.com/?apikey=e9692a7c&s=${searchQuery || 'series'}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True' && data.Search) {
          setShows(data.Search);
        } else {
          setError(data.Error || 'Nessuna serie trovata.');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="my-4">
      <div className="container">
        <h4 className="text-light mb-4">{title}</h4>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert message={error} />
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {shows.map((show) => (
              <div key={show.imdbID} className="col">
                <Card className="shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={show.Poster !== 'N/A' ? show.Poster : 'https://via.placeholder.com/400x600.png?text=No+Image'}
                    alt={show.Title}
                    style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                  />
                  <Card.Body className="bg-dark text-light">
                    <Card.Title>{show.Title}</Card.Title>
                    <Card.Text className="text-muted">{show.Year}</Card.Text>
                    <Button variant="outline-light" href={`/movie-details/${show.imdbID}`}>
                      Dettagli
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TVShows;
