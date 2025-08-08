import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlistStore } from '../store/wishlistStore'

const Header: React.FC = () => {
  const wishlist = useWishlistStore((state) => state.wishlist)
  const count = wishlist.length

  return (
    <header className="header">
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Link to="/">Main Hall</Link>
        <Link to="/wishlist">Wishlist{count > 0 ? ` (${count})` : ''}</Link>
      </nav>
    </header>
  )
}

export default Header
