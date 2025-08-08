import React, { useState } from 'react'
import type Movie from '@/types/Movie'
import { Link } from 'react-router-dom'
import '@/styles/MovieCard.scss'

interface MovieCardProps {
  movie: Movie
  onRemove?: (movieId: number) => void
  category?: string
}

interface Lightning {
  top: string
  left: string
  transform: string
  animationDelay: string
  fontSize: string
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onRemove, category }) => {
  const [lightning, setLightning] = useState<Lightning[]>([])

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRemove) {
      onRemove(movie.id)
    }
  }

  const randomizeLightning = () => {
    if (category === 'fantasy') {
      const newLightning: Lightning[] = Array.from({ length: 5 }, () => ({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        transform: `rotate(${Math.random() * 60 - 30}deg)`,
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${Math.random() * 1.5 + 1}em`,
        // fontSize: `1em`,
      }))
      setLightning(newLightning)
    }
  }

  return (
    <div
      className={`movie-card ${category === 'horror' ? 'horror-card' : ''}`}
      onMouseEnter={randomizeLightning}
    >
      {category === 'fantasy' && (
        <div className="lightning-container">
          {lightning.map((style, index) => (
            <span key={index} className="lightning" style={style}>
              ⚡
            </span>
          ))}
        </div>
      )}
      <Link to={`/movie/${movie.id}`} state={{ category }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : 'https://via.placeholder.com/200x300.png?text=No+Image'
          }
          alt={movie.title}
          className="poster"
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
