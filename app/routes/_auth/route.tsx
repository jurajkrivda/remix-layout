import { Outlet } from '@remix-run/react'

export default function Auth() {
  return (
    <div className="grid min-h-full place-items-center">
      <Outlet />
    </div>
  )
}
