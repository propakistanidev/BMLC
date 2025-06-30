import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";
import backgroundImage from "../assets/GroupCoachingBG.png";

const Profile = () => {
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
        <div className="flex min-h-screen bg-[#F8F6FC]">
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
                        <button onClick={() => setCollapsed(!collapsed)}>
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
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl text-[#27272A] font-bold">Profile</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                {/* Background Section */}
                <div className="relative w-full h-60 rounded-xl overflow-hidden">
                    <img
                        src={backgroundImage}
                        alt="Profile Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Profile Image */}
                <div className="relative z-10 flex justify-center -mt-28 mb-10">
                    <div className="relative w-32 h-32">
                        <img
                            src={profileImage}
                            alt="User"
                            className="w-full h-full object-cover rounded-full border-4 border-white shadow"
                        />
                        <button className="absolute bottom-0 right-0 bg-[#BBA5E0] p-1 rounded-full shadow">
                            <Icon icon="fluent:camera-28-regular" className="text-gray-700 text-lg" />
                        </button>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-20">
                    {/* Top Row: Name, Email, Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    {/* Bio Row */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                            placeholder="Tell us about yourself..."
                            rows={5}
                            className="w-full border border-gray-300 rounded px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>
                </div>
                {/* Experience Section */}
                <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                </div>
                {/* Password Section */}
                <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between rounded-xl p-6 w-full max-w-5xl mx-auto mb-20"><button>Delete Account</button><button>Save Changes</button></div>
            </div>
        </div>
    );
};

export default Profile;