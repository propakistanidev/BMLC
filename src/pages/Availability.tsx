import profileImage from "../assets/profile.png";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Availability = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navTabs = [
        { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
        { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
        { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
        { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
        { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
        { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
        { label: "Call History", icon: "solar:phone-linear", to: "/Calls" },
    ];
    const unavailableDays = ["Sun", "Sat"];
    return (
        <div className="flex h-screen  bg-[#F8F6FC]">
            {/* Sidebar */}

            <div className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${collapsed ? 'w-16 md:w-20 h-[60px] md:h-auto' : 'w-full md:w-60 h-screen md:h-auto'} fixed md:static z-20 top-0 left-0 right-0 md:flex md:flex-col shadow-lg md:shadow-none`}>
                <div>
                    <div className={`flex ${collapsed ? 'flex-row md:flex-col items-center gap-2 md:gap-4' : 'items-center justify-between'}`}>
                        <img src={logo} alt="Logo" className="h-8" />
                        <button onClick={() => setCollapsed(!collapsed)}>
                            <Icon icon="mdi:menu" className="text-purple-700 text-2xl" />
                        </button>
                    </div>
                    <nav className={`mt-6 md:mt-10 space-y-4 ${collapsed ? 'hidden' : 'block'} md:block`}>
                        {navTabs.map((tab, idx) => (
                            <Link
                                key={idx}
                                to={tab.to}
                                className="flex items-center gap-4 cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-[#C8B8E8] hover:font-semibold rounded-lg py-3 px-3 transition-colors duration-200"
                            >
                                <Icon icon={tab.icon} className="text-xl flex-shrink-0" />
                                {!collapsed && <span className="text-sm md:text-base">{tab.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className={`${collapsed ? 'hidden' : 'block'} md:block mt-6 md:mt-10`}>
                    <button
                        className={`flex items-center border-1 text-red-500 border-red-500 cursor-pointer rounded-lg py-2 gap-2 text-sm md:text-lg transition-colors duration-200 hover:bg-red-50 ${collapsed ? 'justify-center px-2' : 'px-6 md:px-12'}`}
                        onClick={() => window.location.href = '/'}
                    >
                        <Icon icon="mdi:logout" className="text-xl font-bold flex-shrink-0" />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto mt-[60px] md:mt-0">
                {/* Header with Admin Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                    <h1 className="text-2xl sm:text-3xl mt-2 sm:mt-4 text-[#27272A] font-bold">Availability</h1>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img src={profileImage} alt="User" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full" />
                        <div className="text-left text-xs sm:text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>
                {/* Weekly Hours */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6 items-start bg-white rounded-2xl p-4 sm:p-6">
                    {/* Weekly Hours Section */}
                    <div className="flex flex-col items-start w-full lg:w-[60%]">
                        <h1 className="flex flex-row gap-2 items-center text-base sm:text-lg font-semibold text-[#27272A] mb-2">
                            <Icon icon="ion:repeat-sharp" className="w-5 h-5 sm:w-6 sm:h-6 text-[#27272A]" /> 
                            Weekly Hours
                        </h1>
                        <p className="text-[#7F7F7F] text-sm sm:text-base mb-4">Set when you are typically available for meetings</p>
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
                            const isUnavailable = unavailableDays.includes(day);
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-4 w-full py-2 sm:py-1 rounded-xl ${isUnavailable ? "bg-white" : ""
                                        }`}
                                >
                                    {/* Circular Day Badge */}
                                    <p
                                        className={`w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center rounded-full text-sm sm:text-base font-light flex-shrink-0 ${isUnavailable ? "bg-white border-1 border-gray-300 text-black" : "bg-[#C8B8E8] text-black"
                                            }`}
                                    >
                                        {day}
                                    </p>

                                    {/* Time Inputs or Unavailable Text */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 flex-1">
                                        {isUnavailable ? (
                                            <div className="flex items-center gap-2">
                                                <span className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-600 rounded-full">
                                                    Unavailable
                                                </span>
                                                <Icon icon='simple-line-icons:plus' className="text-gray-500" />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                                                <input
                                                    type="time"
                                                    className="border bg-[#F8F6FC] border-gray-300 rounded-xl px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base w-full sm:w-auto"
                                                    defaultValue="09:00"
                                                />
                                                <span className="text-gray-500 hidden sm:block">-</span>
                                                <input
                                                    type="time"
                                                    className="border bg-[#F8F6FC] border-gray-300 rounded-xl px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base w-full sm:w-auto"
                                                    defaultValue="17:00"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Icons (only for available days) */}
                                    {!isUnavailable && (
                                        <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
                                            <button title="Remove">
                                                <Icon
                                                    icon="mdi:close"
                                                    className="text-[#454545] text-base sm:text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                            <button title="Add">
                                                <Icon
                                                    icon="mdi:plus"
                                                    className="text-[#454545] text-base sm:text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                            <button title="Copy">
                                                <Icon
                                                    icon="bi:copy"
                                                    className="text-[#454545] text-base sm:text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Date-specific Hours Section */}
                    <div className="flex flex-col w-full lg:w-[40%] mt-6 lg:mt-0">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
                            <h1 className="flex flex-row gap-2 items-center text-base sm:text-lg text-[#27272A] font-semibold">
                                <Icon icon='ooui:calendar' className="text-[#27272A] w-5 h-5 sm:w-6 sm:h-6" />
                                Date-specific Hours
                            </h1>
                            <button className="flex flex-row gap-2 items-center px-3 sm:px-4 py-2 bg-[#E5E5E5] text-[#ABABAB] rounded-lg text-sm sm:text-base">
                                <Icon icon="icons8:plus" className="w-4 h-4 sm:w-5 sm:h-5" /> 
                                Hours
                            </button>
                        </div>
                        {/* Additional date-specific logic goes here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Availability;