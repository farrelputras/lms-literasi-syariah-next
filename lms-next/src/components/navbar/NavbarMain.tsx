
import MobileSidebar from "./mobile-sidebar"
import NavbarRoutes from "./NavbarRoutes"

export const NavbarMain = () => {
    return (
        <div className="p-3 border-b flex items-center h-full bg-white shadow-sm">
            {/* <MobileSidebar /> */}
            <NavbarRoutes />
        </div>
    )
}