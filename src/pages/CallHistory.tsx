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
            <div className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${collapsed ? 'w-20' : 'w-full md:w-60'} fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0 md:flex md:flex-col`}>
                <div>
                    <div className={`flex ${collapsed ? 'flex-row md:flex-col items-center gap-2 md:gap-4' : 'items-center justify-between'}`}>
                        <img src={logo} alt="Logo" className="h-8" />
                        <button onClick={() => setCollapsed(!collapsed)}>
                            <Icon icon="mdi:menu" className="text-purple-700 text-2xl" />
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
                <div className="hidden md:block mt-10">
                    <button
                        className={`flex items-center border-2 text-red-500 border-red-500 rounded-lg py-2 gap-2 text-lg hover:text-purple-800 hover:font-bold transition-all duration-300 ${collapsed ? 'justify-center px-2' : 'px-12'}`}
                        onClick={() => window.location.href = '/'}
                    >
                        <Icon icon="mdi:logout" className="text-xl font-bold" />
                        {!collapsed && 'Logout'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Header with Admin Info */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl text-[#27272A] font-bold">Call History</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-xl p-6 w-full overflow-x-auto">
                    {/* Header with Search */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-[#27272A]">Call History with User</h2>

                        {/* Search Bar with Icon Button on Right */}
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2"
                                title="Search"
                            >
                                <Icon icon="mdi:magnify" className="text-lg" />
                            </button>
                        </div>

                    </div>

                    {/* Table */}
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="border-b-2 border-gray-200">
                            <tr>
                                <th className="py-2 px-4 font-medium">#</th>
                                <th className="py-2 px-4 font-medium">Title</th>
                                <th className="py-2 px-4 font-medium">User</th>
                                <th className="py-2 px-4 font-medium">Status</th>
                                <th className="py-2 px-4 font-medium">Cost</th>
                                <th className="py-2 px-4 font-medium">Duration</th>
                                <th className="py-2 px-4 font-medium">Rate & Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    id: "#001",
                                    title: "Mental Health Sickness",
                                    name: "Sarah Thompson",
                                    cost: "$100",
                                    duration: "30 mins",
                                    status: "Completed",
                                    rating: 4.5,
                                    review: "Very helpful session!",
                                },
                                {
                                    id: "#002",
                                    title: "Career Guidance",
                                    name: "James Miller",
                                    cost: "$80",
                                    duration: "45 mins",
                                    status: "User Declined",
                                    rating: 0,
                                    review: "",
                                },
                                {
                                    id: "#003",
                                    title: "Stress Management",
                                    name: "Amanda Lee",
                                    cost: "$120",
                                    duration: "60 mins",
                                    status: "Coach Declined",
                                    rating: 0,
                                    review: "",
                                },
                            ].map((call, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 transition">
                                    <td className="py-2 px-4">{call.id}</td>
                                    <td className="py-2 px-4">{call.title}</td>
                                    <td className="py-2 px-4 flex items-center gap-2">
                                        <img
                                            src={profileImage}
                                            alt={call.name}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                        <span>{call.name}</span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold
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
                                    <td className="py-2 px-4">{call.cost}</td>
                                    <td className="py-2 px-4">{call.duration}</td>
                                    <td className="py-2 px-4">
                                        {call.rating > 0 ? (
                                            <div className="flex items-center gap-1">
                                                <Icon icon="material-symbols:star" className="text-yellow-400 text-lg" />
                                                <span className="font-medium">{call.rating}</span>
                                                <span className="text-gray-500 text-sm">({call.review})</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 italic">No review</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CallHistory;