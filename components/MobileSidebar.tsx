import { Sidebar, SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Link } from "react-router"
import Navitems from "./Navitems"

const MobileSidebar = () => {

    let sidebar :SidebarComponent

    const toggleSidebar = () => {
        sidebar.toggle()
    }

  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to="/" className="link-logo">
                <img src="/assets/icons/logo.svg" alt="LOGO" className="size-[30px]" />
                <h1>TourSist</h1>
            </Link>
            {/* @ts-ignore */}
            <button onClick={toggleSidebar}>
                <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
            </button>
        </header>
        {/* @ts-ignore */}
        <SidebarComponent ref={(Sidebar) => sidebar = Sidebar} width={270} 
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="Over"
        >
            <Navitems handleClick={toggleSidebar} />
        </SidebarComponent>
    </div>
  )
}

export default MobileSidebar