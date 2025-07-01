import profileImage from "../assets/profile.png";
import coach1 from "../assets/coach1.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Earnings = () => {
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

    const users = [
        {
            name: "Sarah Thompson",
            expertise: "Career Guidance & Personal Growth",
            image: coach1,
            date: "June 29, 2025",
            amount: "$150.00",
        },
        {
            name: "James Miller",
            expertise: "Life Coaching & Confidence",
            image: coach1,
            date: "June 28, 2025",
            amount: "$130.00",
        },
        {
            name: "Amanda Lee",
            expertise: "Mindfulness & Stress Management",
            image: coach1,
            date: "June 27, 2025",
            amount: "$170.00",
        },
        {
            name: "Michael Chen",
            expertise: "Startup & Career Advice",
            image: coach1,
            date: "June 26, 2025",
            amount: "$200.00",
        },
        {
            name: "Linda Park",
            expertise: "Work-Life Balance",
            image: coach1,
            date: "June 25, 2025",
            amount: "$120.00",
        },
        {
            name: "Robert Green",
            expertise: "Financial Coaching",
            image: coach1,
            date: "June 24, 2025",
            amount: "$180.00",
        },
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
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl mt-4 text-[#27272A] font-bold">Earnings</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                {/* Users and Summary Section */}
                <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow p-8 m-4">
                    {/* Users Section */}
                    <div className="w-full lg:w-3/4">
                        <h2 className="text-2xl font-semibold ml-2 text-gray-800 mb-4">Users</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {users.map((user, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl shadow-lg border-1 border-gray-200 p-4 flex flex-col gap-8"
                                >
                                    {/* Top */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={user.image}
                                            alt={user.name}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="text-gray-800 font-semibold text-md">{user.name}</h4>
                                            <p className="text-sm text-gray-500">{user.expertise}</p>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-white border-1 border-gray-200 h-30 p-1.5 pt-4 rounded-xl flex flex-col items-center">
                                            <div className="bg-[#E8EFF6] w-9 h-9 rounded-lg flex flex-col justify-center items-center"><Icon icon="solar:calendar-linear" className="text-2xl  text-[#9363C4]" /> </div>
                                            <p className="text-md pt-2 text-[#7F7F7F]">Date</p>
                                            <p className="text-lg font-medium text-gray-600">{user.date}</p>
                                        </div>
                                        <div className="flex-1 bg-white border-1 border-gray-200 h-30 pt-4 rounded-xl flex flex-col items-center">
                                            <div className="bg-[#F0FDF4] w-9 h-9 rounded-lg flex flex-col justify-center items-center"><Icon icon="stash:hand-holding-dollar-light" className="text-3xl text-green-600  rounded-md" /></div>
                                            <p className="text-md pt-2 text-[#7F7F7F]">Payment</p>
                                            <p className="text-lg font-medium text-gray-600">{user.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="w-full lg:w-1/4 space-y-6 bg-white  rounded-2xl">
                        {/* Total Revenue Card */}
                        <h1 className="text-2xl font-semibold text-[#27272A]">Total Earnings</h1>
                        <div className="border-1 border-gray-300 rounded-2xl space-y-10 -my-2">
                            <div className="bg-white bg-blur-md rounded-2xl bg-[linear-gradient(to_bottom_left,_#C8B8E866_45%,_white_60%,_white_50%,_#C8B8E866_100%)] ">
                                <div className="p-6">
                                    <p className="text-md text-gray-500 mb-1">Total Earnings</p>
                                    <h2 className="text-4xl font-bold text-[#9363C4]">$4,800.00</h2>
                                </div>


                                <div className="border-t border-white px-6 text-sm text-gray-600 space-y-6">
                                    <div className="flex justify-between pt-4">
                                        <span className="text-lg">Revenue Split</span>
                                        <span className="text-xl font-bold">70%</span>
                                    </div>


                                    <div className="border-t border-white flex justify-between pt-4 pb-4">
                                        <span className="text-lg">Your Earnings</span>
                                        <span className="text-xl font-bold">$3,360.00</span>
                                    </div>
                                </div>
                            </div>


                            {/* Stripe Card */}
                            <div className="bg-white rounded-xl shadow p-6">
                                <h3 className="text-lg font-medium text-[#33384B] mb-2">
                                    Stripe Account
                                </h3>
                                <div className="border bg-[#F8F6FC] border-gray-200 rounded-lg ml-2 mb-2 px-4 py-2">
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        {/* Left: "S" icon */}
                                        <Icon
                                            icon="simple-icons:stripe"
                                            className="text-xl"
                                        />

                                        {/* Center: Text */}
                                        <span className="font-semibold">
                                            Stripe Account .... 2345
                                        </span>

                                        {/* Right: Arrow icon */}
                                        <Icon
                                            icon="ic:round-play-arrow"
                                            className="text-2xl "
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-0.5 mt-6 ml-2">
                                    <button className="px-4 py-2.5 bg-[#C8B8E8] text-white text-sm rounded-tl-md rounded-bl-md">
                                        <Icon icon="simple-icons:stripe" className="text-lg text-[#27272A]" />
                                    </button>
                                    <button className="w-full p-2.5 bg-[#C8B8E8] text-sm rounded-tr-lg rounded-br-lg text-[#27272A]">
                                        Disconnect Stripe account
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earnings;