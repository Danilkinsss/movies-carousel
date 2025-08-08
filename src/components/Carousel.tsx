import React from 'react'
import type Movie from '../types/Movie'
import MovieCard from './MovieCard'
import '../styles/Carousel.scss'

interface CarouselProps {
  title: string
  movies: Movie[]
  category: string
}

const Carousel: React.FC<CarouselProps> = ({ title, movies, category }) => {
  return (
    <div className={`carousel-container ${category.toLowerCase()}`}>
      <h2>{title}</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
