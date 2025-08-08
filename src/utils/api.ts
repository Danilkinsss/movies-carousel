const API_TOKEN = import.meta.env.VITE_TMDB_BEARER

const BASE_URL = 'https://api.themoviedb.org/3'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
}

async function fetchFromTMDB(endpoint: string) {
  const url = `${BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Response:', response)
    return data
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error)
    throw error
  }
}

export async function getPopularMovies() {
  const data = await fetchFromTMDB('/movie/popular?language=en-US&page=1')
  console.log('Popular movies data:', data)
  return data.results
}

export async function getMovieByID(id: string) {
  const data = await fetchFromTMDB(`/movie/${id}?language=en-US`)
  console.log(`Movie details for ID ${id}:`, data)
  return data
}
