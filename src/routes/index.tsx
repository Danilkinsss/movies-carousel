import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'
import App from '../App'
import Wishlist from '../pages/Wishlist'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetails />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
    ],
  },
])
