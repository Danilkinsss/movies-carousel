import React from 'react'
import { useWishlistStore } from '../store/wishlistStore'
import MovieCard from '../components/MovieCard'
import '../styles/Wishlist.css'

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore()

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-grid">
          {wishlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={removeFromWishlist}
            />
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty. Add some movies!</p>
      )}
    </div>
  )
}

export default Wishlist
