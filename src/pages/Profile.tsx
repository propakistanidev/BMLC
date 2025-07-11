import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";
import backgroundImage from "../assets/withoutStroke.png";

const Profile = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const navTabs = [
        { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
        { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
        { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
        { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
        { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
        { label: "Profile", icon: "ant-design:setting-outlined", to: "/Profile" },
        { label: "Call History", icon: "solar:phone-linear", to: "/Calls" },
    ];

    return (
        <div className="flex min-h-screen bg-[#F8F6FC]">
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
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl text-[#27272A] font-bold">Profile</h1>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img src={profileImage} alt="User" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full" />
                        <div className="text-left text-xs sm:text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                {/* Centered Background Image */}
                <div className="relative w-full max-w-5xl mx-auto h-32 sm:h-40 md:h-50 rounded-xl overflow-hidden z-0">
                    <img
                        src={backgroundImage}
                        alt="Profile Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Profile Image */}
                <div className="relative z-10 flex justify-center -mt-16 sm:-mt-20 md:-mt-24">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                        <img
                            src={profileImage}
                            alt="User"
                            className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                        <button className="absolute bottom-0 right-0 bg-[#BBA5E0] p-1 sm:p-1.5 rounded-full shadow">
                            <Icon icon="fluent:camera-28-regular" className="text-gray-700 text-base sm:text-lg" />
                        </button>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white shadow rounded-2xl p-4 sm:p-6 w-full max-w-5xl mx-auto mb-5">
                    <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Personal Information</h1>

                    {/* Top Row: Name, Email, Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        {/* Name */}
                        <div className="relative">
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="iconoir:user" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-9 sm:pl-10 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="fluent:mail-20-regular" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full pl-9 sm:pl-10 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="lucide:phone-call" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full pl-9 sm:pl-10 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="relative">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <div className="absolute left-3 top-[33px] text-gray-400">
                            <Icon icon="mage:id-card" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <textarea
                            placeholder="Tell us about yourself..."
                            rows={4}
                            className="w-full pl-9 sm:pl-10 border border-gray-300 py-2 text-xs sm:text-sm resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                        ></textarea>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="bg-white shadow rounded-xl p-4 sm:p-6 w-full max-w-5xl mx-auto mb-5">
                    <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Experience</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        {/* Experience */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="carbon:id-management" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="e.g. 5 Years"
                                className="w-full pl-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                        </div>

                        {/* Certifications */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="mdi:certificate-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="e.g. Google UX"
                                className="w-full pl-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                        </div>

                        {/* Specialties */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Specialties</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="mdi:head-heart-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="e.g. Mindfulness"
                                className="w-full pl-10 border border-gray-300 rounded-xl px-4 py-2 text-sm "
                            />
                        </div>
                    </div>
                </div>

                {/* Password Section */}
                <div className="bg-white shadow rounded-xl p-4 sm:p-6 w-full max-w-5xl mx-auto mb-5">
                    <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Change Password</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        {/* Current Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showCurrent ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrent(!showCurrent)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showCurrent ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showNew ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showNew ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Confirm New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showConfirm ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 rounded-xl p-4 sm:p-6 w-full max-w-5xl mx-auto mb-5">
                    <button className="text-red-600 border border-red-600 px-4 py-2 rounded-lg font-medium text-sm sm:text-base hover:bg-red-50 transition-colors">Delete Account</button>
                    <button className="bg-[#C8B8E8] flex flex-row gap-2 px-4 py-2 rounded-lg font-medium text-[#27272A] text-sm sm:text-base transition-colors hover:bg-[#B8A5D8] justify-center sm:justify-start">
                        <Icon icon='mynaui:save' className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;