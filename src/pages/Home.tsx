import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPopularMovies } from '../utils/api'
import type Movie from '../types/Movie'

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getPopularMovies().then(setMovies).catch(console.error)
  }, [])

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
