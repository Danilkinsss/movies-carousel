import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieByID } from '../utils/api'
import type Movie from '../types/Movie'

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

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieDetails
