import { Link } from '@remix-run/react'

export function Header() {
  return (
    <nav>
      <ul className="flex space-x-3 p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
