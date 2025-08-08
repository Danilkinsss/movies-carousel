import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieByID } from '../utils/api'
import type Movie from '../types/Movie'
import { useWishlistStore } from '../store/wishlistStore'
import '../styles/MovieDetails.scss'

const getCategoryFromGenres = (
  genres: Array<{ id: number; name: string }>
): string => {
  const genreNames = genres.map((g) => g.name)
  if (genreNames.includes('Horror')) return 'horror'
  if (genreNames.includes('Fantasy')) return 'fantasy'
  if (genreNames.includes('Comedy')) return 'comedy'
  return 'default'
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [category, setCategory] = useState('default')
  const { addToWishlist, removeFromWishlist, isMovieInWishlist } =
    useWishlistStore()

  useEffect(() => {
    if (id) {
      getMovieByID(id)
        .then((data) => {
          setMovie(data)
          if (data && data.genres) {
            setCategory(getCategoryFromGenres(data.genres))
          }
        })
        .catch(console.error)
    }
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  const handleWishlistClick = () => {
    if (isMovieInWishlist(movie.id)) {
      removeFromWishlist(movie.id)
    } else {
      addToWishlist(movie)
    }
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
    <div className={`movie-details ${category}`}>
      <div className="movie-details-grid">
        <div className="movie-poster">
          <img src={posterUrl} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}

          <button onClick={handleWishlistClick} className="wishlist-button">
            {isMovieInWishlist(movie.id)
              ? 'Remove from Wishlist'
              : 'Add to Wishlist'}
          </button>

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
