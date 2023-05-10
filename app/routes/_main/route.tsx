import { Outlet } from '@remix-run/react'
import { Footer } from './footer'
import { Header } from './header'

export default function Main() {
  return (
    <div>
      <Header />
      <main className="border-b border-t border-b-black border-t-black p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
