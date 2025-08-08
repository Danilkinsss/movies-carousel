import React, { useEffect, useState } from 'react'
import type Movie from '@/types/Movie'
import { getMoviesByGenre } from '@/utils/api'
import Carousel from '@/components/Carousel'

const Home: React.FC = () => {
  const [fantasyMovies, setFantasyMovies] = useState<Movie[]>([])
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([])
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fantasy = getMoviesByGenre(14)
        const comedy = getMoviesByGenre(35)
        const horror = getMoviesByGenre(27)

        const [fantasyResults, comedyResults, horrorResults] =
          await Promise.all([fantasy, comedy, horror])

        setFantasyMovies(fantasyResults)
        setComedyMovies(comedyResults)
        setHorrorMovies(horrorResults)
      } catch (error) {
        console.error('Failed to fetch movies:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (isLoading) {
    return <div>Loading movie carousels...</div>
  }

  return (
    <div className="home-container">
      <Carousel title="Fantasy" movies={fantasyMovies} category="fantasy" />
      <Carousel title="Comedy" movies={comedyMovies} category="comedy" />
      <Carousel title="Horror" movies={horrorMovies} category="horror" />
    </div>
  )
}

export default Home
