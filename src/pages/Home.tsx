import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const randomMovieId = Math.floor(Math.random() * 1000)
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/movie/${randomMovieId}`}>Random Movie</Link>
    </div>
  )
}

export default Home
