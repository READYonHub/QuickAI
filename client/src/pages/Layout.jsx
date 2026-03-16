import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1 className="text-3xl underline">Layout</h1>
      <Outlet />
    </div>
  )
}

export default Layout
