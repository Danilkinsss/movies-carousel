import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const count = 0
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
        <Link to="/wishlist">Wishlist{count ? ` (${count})` : ''}</Link>
      </nav>
    </header>
  )
}

export default Header
