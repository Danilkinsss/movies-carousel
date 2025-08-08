import { Link } from 'react-router-dom'

export default function Header() {
  const count = 0
  return (
    <header
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Link to="/" style={{ color: 'black' }}>
        Main Hall
      </Link>
      <nav>
        <Link to="/wishlist" style={{ color: 'black' }}>
          Wishlist{count ? ` (${count})` : ''}
        </Link>
      </nav>
    </header>
  )
}
