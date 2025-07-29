import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { MobileSidebar, Navitems } from "components"
import { Outlet } from "react-router"

const adminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar />
        <aside className="w-full max-w-[250px] hidden lg:block">
            <SidebarComponent width={270} enableGestures={false} >
                <Navitems />
                </SidebarComponent>  
        </aside>
        <aside className="children">
        <Outlet />
        </aside>
    </div>
  )
}

export default adminLayout