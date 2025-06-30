import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";

const Chats = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
    { label: "Call History", icon: "solar:phone-linear", to: "/calls" },
  ];

  return (
    <div className="flex h-screen bg-[#F8F6FC]">
      {/* Sidebar */}
      <div
        className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${
          collapsed ? "w-20" : "w-full md:w-60"
        } fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0`}
      >
        {/* Top logo and menu toggle */}
        <div>
          <div
            className={`flex ${
              collapsed ? "flex-col items-center gap-2" : "items-center justify-between"
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

          {/* Nav tabs */}
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

        {/* Logout Button */}
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
        {/* Top section with title and admin info */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl text-[#27272A] font-bold">Chats</h1>
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="User"
              className="h-9 w-9 rounded-full"
            />
            <div className="text-left text-sm text-gray-700">
              <div className="font-medium">Admin</div>
              <div className="text-gray-500 text-xs">admin@bmlc.com</div>
            </div>
          </div>
        </div>

        {/* Placeholder for chat content */}
        <div className="bg-white rounded-xl shadow p-6 text-gray-600">
          <p className="text-center text-gray-400">Chat section coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;