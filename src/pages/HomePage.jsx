import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies('/movie/popular', page).then((response) => {
      setMovies(response.data.results);
    });
  }, [page]);

  return (
    <div>
      <h1 className='page-h1'>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;
