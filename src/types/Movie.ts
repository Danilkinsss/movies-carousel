export default interface Movie {
  id: number
  title: string
  overview: string
  tagline?: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  genres: { id: number; name: string }[]
  runtime?: number
}
