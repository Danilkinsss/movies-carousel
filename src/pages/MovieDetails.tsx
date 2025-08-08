import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieByID } from '../utils/api'
import type Movie from '../types/Movie'
import '../styles/MovieDetails.css'

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    if (id) {
      getMovieByID(id).then(setMovie).catch(console.error)
    }
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image'

  return (
    <div className="movie-details">
      <div className="movie-details-grid">
        <div className="movie-poster">
          <img src={posterUrl} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <div className="details-row">
            <div className="detail-item">
              <strong>Release Date</strong>
              <span>
                {new Date(movie.release_date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </span>
            </div>
            <div className="detail-item">
              <strong>User Score</strong>
              <span>{movie.vote_average.toFixed(1)} / 10</span>
            </div>
            {movie.runtime && (
              <div className="detail-item">
                <strong>Runtime</strong>
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
            )}
          </div>

          <h3>Genres</h3>
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
