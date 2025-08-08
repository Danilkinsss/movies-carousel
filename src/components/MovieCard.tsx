import React from 'react'
import type Movie from '../types/Movie'
import { Link } from 'react-router-dom'
import '../styles/MovieCard.scss'

interface MovieCardProps {
  movie: Movie
  onRemove?: (movieId: number) => void
  category?: string
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onRemove, category }) => {
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRemove) {
      onRemove(movie.id)
    }
  }

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} state={{ category }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : 'https://via.placeholder.com/200x300.png?text=No+Image'
          }
          alt={movie.title}
        />
        <p className="movie-card-title">{movie.title}</p>
      </Link>
      {onRemove && (
        <button onClick={handleRemoveClick} className="remove-button">
          Remove
        </button>
      )}
    </div>
  )
}

export default MovieCard
