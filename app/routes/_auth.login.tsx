import type { V2_MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Login' }]
}

export default function Login() {
  return (
    <div>
      <h1 className="main-heading">Login</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}
