import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails: React.FC = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Movie Details Page: {id}</h1>
    </div>
  )
}

export default MovieDetails
