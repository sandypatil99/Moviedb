import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };

    const fetchMovieCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      const data = await response.json();
      setCast(data.cast.slice(0, 6)); 
    };

    fetchMovieDetails();
    fetchMovieCast();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="movie-overlay">
          <div className="movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h1>{movie.title}</h1>
              <p className="rating">Rating: {movie.vote_average.toFixed(1)} ⭐</p>
              <p className="runtime">{movie.runtime} min</p>
              <p className="genres">
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="release-date">
                Release Date: {new Date(movie.release_date).toDateString()}
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="cast-photo"
              />
              <p className="cast-name">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
