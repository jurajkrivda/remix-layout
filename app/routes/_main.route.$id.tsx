import { isRouteErrorResponse, useRouteError } from '@remix-run/react'
import { notFound } from 'remix-utils'

export async function loader() {
  throw notFound({ message: 'route not found' })
}

export default function Route() {
  return (
    <div>
      <h1 className="main-heading">Route</h1>
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <h1 className="main-heading">Route not found</h1>
  }
}
