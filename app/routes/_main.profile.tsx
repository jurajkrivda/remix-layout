import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Profile' }]
}

export default function Profile() {
  return (
    <div className="with-sidebar">
      <aside className="sidebar">Sidebar content</aside>
      <div>
        <h1 className="main-heading">Profile</h1>
      </div>
    </div>
  )
}
