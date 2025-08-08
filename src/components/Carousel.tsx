import React from 'react'
import type Movie from '../types/Movie'
import { Link } from 'react-router-dom'
import '../styles/Carousel.css'

interface CarouselProps {
  title: string
  movies: Movie[]
}

const Carousel: React.FC<CarouselProps> = ({ title, movies }) => {
  return (
    <div className="carousel-container">
      <h2>{title}</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300.png?text=No+Image'
                }
                alt={movie.title}
              />
              <p className="carousel-item-title">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
