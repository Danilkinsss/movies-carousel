import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlistStore } from '@/store/wishlistStore'
import '@/styles/Header.scss'

const Header: React.FC = () => {
  const wishlist = useWishlistStore((state) => state.wishlist)
  const count = wishlist.length

  return (
    <header className="header">
      <nav>
        <Link to="/">Main Hall</Link>
        <Link to="/wishlist">Wishlist{count > 0 ? ` (${count})` : ''}</Link>
      </nav>
    </header>
  )
}

export default Header
