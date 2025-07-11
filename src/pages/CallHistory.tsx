import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";

const CallHistory = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navTabs = [
        { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
        { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
        { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
        { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
        { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
        { label: "Profile", icon: "ant-design:setting-outlined", to: "/Profile" },
        { label: "Call History", icon: "solar:phone-linear", to: "/calls" },
    ];

    return (
        <div className="flex h-screen bg-[#F8F6FC]">
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
                    <h1 className="text-2xl sm:text-3xl mt-2 sm:mt-4 text-[#27272A] font-bold">Call History</h1>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img src={profileImage} alt="User" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full" />
                        <div className="text-left text-xs sm:text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-xl p-4 sm:p-6 w-full overflow-x-auto">
                    {/* Header with Search */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#27272A]">Call History with User</h2>

                        {/* Search Bar with Icon Button on Right */}
                        <div className="relative w-full sm:w-64">
                            <input
                                type="text"
                                placeholder="Search User"
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                            <button
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white p-2 sm:p-[8.5px] hover:bg-[#B8A5D8] transition-colors"
                                title="Search"
                            >
                                <Icon icon="mdi:magnify" className="text-base sm:text-lg text-[#27272A]" />
                            </button>
                        </div>

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm text-left text-gray-700 min-w-[800px]">
                            <thead className="border-b-2 border-gray-200">
                                <tr>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Sr#</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Title</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">User</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Status</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Cost</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Duration</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold">Rate & Reviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: "01",
                                        title: "Mental Health Sickness",
                                        name: "Sarah Thompson",
                                        cost: "$100",
                                        duration: "30 mins",
                                        status: "Completed",
                                        rating: 4.5,
                                        review: "Very helpful session!",
                                    },
                                    {
                                        id: "02",
                                        title: "Career Guidance",
                                        name: "James Miller",
                                        cost: "$80",
                                        duration: "45 mins",
                                        status: "User Declined",
                                        rating: 0,
                                        review: "",
                                    },
                                    {
                                        id: "03",
                                        title: "Stress Management",
                                        name: "Amanda Lee",
                                        cost: "$120",
                                        duration: "60 mins",
                                        status: "Coach Declined",
                                        rating: 0,
                                        review: "",
                                    },
                                ].map((call, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                        <td className="py-2 px-2 sm:px-4">{call.id}</td>
                                        <td className="py-2 px-2 sm:px-4">{call.title}</td>
                                        <td className="py-2 px-2 sm:px-4">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={profileImage}
                                                    alt={call.name}
                                                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
                                                />
                                                <span className="truncate">{call.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 sm:px-4">
                                            <span
                                                className={`px-2 rounded-lg py-1 text-xs font-semibold whitespace-nowrap
                ${call.status === "Completed"
                                                        ? "bg-green-100 text-green-600"
                                                        : call.status === "User Declined"
                                                            ? "bg-red-100 text-red-500"
                                                            : "bg-yellow-100 text-yellow-600"
                                                    }`}
                                            >
                                                {call.status}
                                            </span>
                                        </td>
                                        <td className="py-2 px-2 sm:px-4">{call.cost}</td>
                                        <td className="py-2 px-2 sm:px-4">{call.duration}</td>
                                        <td className="py-2 px-2 sm:px-4">
                                            {call.rating > 0 ? (
                                                <div className="flex items-center gap-1">
                                                    <Icon icon="material-symbols:star" className="text-yellow-400 text-base sm:text-lg" />
                                                    <span className="font-medium text-xs sm:text-sm">{call.rating}</span>
                                                    <span className="text-gray-500 text-xs hidden sm:inline">({call.review})</span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 italic text-xs sm:text-sm">No review</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 px-3 sm:px-4 gap-3 sm:gap-0">
                        {/* Left side: Rows per page */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                            <span>Rows per page:</span>
                            <select className="rounded px-2 py-1 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300">
                                <option value="5" selected>5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                            <p className="text-xs sm:text-sm">1 - 5 of 20</p>
                        </div>

                        {/* Right side: Pagination arrows */}
                        <div className="flex items-center gap-2 text-gray-600">
                            <button className="hover:text-gray-800 p-1 rounded hover:bg-gray-100">
                                <Icon icon="mdi:chevron-left" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button className="hover:text-gray-800 p-1 rounded hover:bg-gray-100">
                                <Icon icon="mdi:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallHistory;