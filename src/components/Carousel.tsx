import React from 'react'
import type Movie from '../types/Movie'
import MovieCard from './MovieCard'
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
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
