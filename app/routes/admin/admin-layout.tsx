import { Outlet } from "react-router"

const adminLayout = () => {
  return (
    <div className="admin-layout">
        Admin Layout
        <Outlet />
    </div>
  )
}

export default adminLayout