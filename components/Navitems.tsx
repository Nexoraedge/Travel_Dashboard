import { cn } from "lib/utils"
import { Link, NavLink } from "react-router"
import { sidebarItems } from "~/constants"

const Navitems = ({handleClick}: {handleClick?:() => void}) => {
    const user = {
        name: "BatMan",
        imageUrl: "/assets/images/david.webp",
        email: "batman@gmail.com"
    }

  return (
    <section className="nav-items">
        <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="LOGO" className="size-[30px]" />
        <h1>TourSist</h1>
        </Link>

        <div className="container">
            <nav>
                {sidebarItems.map(({label , id , icon , href}) =>(
                    <NavLink to={href} key={id} onClick={handleClick}> 
                      {({isActive}:{isActive:boolean}) => (
                        <div className={cn("group nav-item", {'bg-primary-100 !text-white ':isActive})}>
                            <img src={icon} alt={label} className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? 'brightness-0 invert' : ''}`} />
                            {label}
                        </div>
                      )}
                    </NavLink>
                ))}
            </nav>
            <footer className="nav-footer">
                <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || "user"} />
                <article>
                    <h2>{user?.name || "user"}</h2>
                    <p>{user?.email || "user@gmail.com"}</p>
                </article>
                <button onClick={() => { console.log("Logout") }} className="cursor-pointer">
                    <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
                </button>
            </footer>
        </div>
    </section>
  )
}

export default Navitems