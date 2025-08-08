import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type Movie from '@/types/Movie'

interface WishlistState {
  wishlist: Movie[]
  addToWishlist: (movie: Movie) => void
  removeFromWishlist: (movieId: number) => void
  isMovieInWishlist: (movieId: number) => boolean
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (movie) =>
        set((state) => ({ wishlist: [...state.wishlist, movie] })),
      removeFromWishlist: (movieId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((movie) => movie.id !== movieId),
        })),
      isMovieInWishlist: (movieId) =>
        get().wishlist.some((movie) => movie.id === movieId),
    }),
    {
      name: 'wishlist-storage', // unique name
    }
  )
)
