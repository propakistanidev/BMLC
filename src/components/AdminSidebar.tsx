import { useState } from "react";
import { FaBars, FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function AdminSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <aside className={`bg-purple-700 text-white h-screen p-4 flex flex-col justify-between transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'}`}>
            {/* Top: Menu */}
            <div>
                <button onClick={toggleSidebar} className="mb-6 focus:outline-none">
                    <FaBars className="text-xl" />
                </button>

                <nav className="flex flex-col gap-4">
                    <a href="#" className="flex items-center gap-3 text-sm hover:text-purple-300">
                        <FaTachometerAlt /> {!collapsed && "Dashboard"}
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm hover:text-purple-300">
                        <FaUsers /> {!collapsed && "Users"}
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm hover:text-purple-300">
                        <FaCog /> {!collapsed && "Settings"}
                    </a>
                </nav>
            </div>

            {/* Bottom: Logout */}
            <div>
                <a href="#" className="flex items-center gap-3 text-sm hover:text-purple-300">
                    <FaSignOutAlt /> {!collapsed && "Logout"}
                </a>
            </div>
        </aside>
    );
}