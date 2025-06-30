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
        { label: "Call History", icon: "solar:phone-linear", to: "/calls" },
    ];
    const unavailableDays = ["Sun", "Sat"];
    return (
        <div className="flex h-screen bg-[#F8F6FC]">
            {/* Sidebar */}
            <div
                className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${collapsed ? "w-20" : "w-full md:w-60"
                    } fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0`}
            >
                <div>
                    <div
                        className={`flex ${collapsed ? "flex-col items-center gap-2" : "items-center justify-between"
                            }`}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className={`${collapsed ? "h-10 w-10 object-contain" : "h-[56px]"}`}
                        />
                        <button
                            className="cursor-pointer"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <Icon icon="mdi:menu" className="text-purple-400 text-2xl" />
                        </button>
                    </div>

                    <nav className="mt-6 md:mt-10 space-y-4 hidden md:block">
                        {navTabs.map((tab, idx) => (
                            <Link
                                key={idx}
                                to={tab.to}
                                className="flex items-center gap-4 cursor-pointer hover:text-gray-700 hover:bg-[#C8B8E8] hover:font-semibold hover:rounded-lg py-2 px-2"
                            >
                                <Icon icon={tab.icon} className="text-xl" />
                                {!collapsed && <span>{tab.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-10">
                    <button
                        className="flex items-center gap-2 text-md hover:text-[#FF0000] hover:font-bold border border-[#FF0000] text-[#FF0000] p-2 rounded-lg"
                        onClick={() => (window.location.href = "/")}
                    >
                        <Icon icon="mdi:logout" className="text-lg" />
                        {!collapsed && "Logout"}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Header with Admin Info */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl text-[#27272A] font-bold">Availability</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>
                {/* Weekly Hours */}
                <div className="flex flex-row gap-20 mt-8 items-start bg-white rounded-2xl">
                    {/* Weekly Hours Section */}
                    <div className="flex flex-col items-start w-[60%] ml-8">
                        <h1 className=" flex flex-row gap-2 items-center text-lg font-semibold mb-4 mt-6"><Icon icon="ion:repeat-sharp" className="w-6 h-6" /> Weekly Hours</h1>
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
                            const isUnavailable = unavailableDays.includes(day);
                            return (
                                <div
                                    key={index}
                                    className={`flex items-center gap-8 mb-4 w-full p-2 rounded-xl ${isUnavailable ? "bg-white" : ""
                                        }`}
                                >
                                    {/* Circular Day Badge */}
                                    <p
                                        className={`w-15 h-15 flex items-center justify-center  rounded-full text-md font-light ${isUnavailable ? "bg-white border-1 border-gray-300 text-black" : "bg-[#C8B8E8] text-black"
                                            }`}
                                    >
                                        {day}
                                    </p>

                                    {/* Time Inputs or Unavailable Text */}
                                    {isUnavailable ? (
                                        <><span className=" px-4 py-2 text-md text-gray-600 rounded-full">
                                            Unavailable
                                        </span><Icon icon='simple-line-icons:plus' className="-ml-5" /></>
                                    ) : (
                                        <>
                                            <input
                                                type="time"
                                                className="border bg-[#F8F6FC] border-gray-300 rounded-xl px-4 py-2 text-md"
                                                defaultValue="09:00"
                                            />
                                            <span className="text-gray-500">-</span>
                                            <input
                                                type="time"
                                                className="border bg-[#F8F6FC] border-gray-300 rounded-xl px-4 py-2 text-md"
                                                defaultValue="17:00"
                                            />
                                        </>
                                    )}

                                    {/* Action Icons (only for available days) */}
                                    {!isUnavailable && (
                                        <div className="flex items-center gap-2 ml-4">
                                            <button title="Remove">
                                                <Icon
                                                    icon="mdi:close"
                                                    className="text-red-500 text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                            <button title="Add">
                                                <Icon
                                                    icon="mdi:plus"
                                                    className="text-green-600 text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                            <button title="Copy">
                                                <Icon
                                                    icon="mdi:content-copy"
                                                    className="text-blue-600 text-lg hover:scale-110 transition"
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Date-specific Hours Section */}
                    <div className="flex flex-col w-[40%]">
                        <div className="flex justify-between items-center mb-4 mt-6 mr-6">
                            <h1 className="text-lg font-semibold">Date-specific Hours</h1>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded">Hours</button>
                        </div>
                        {/* Additional date-specific logic goes here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Availability;