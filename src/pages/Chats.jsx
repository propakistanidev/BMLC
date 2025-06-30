import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";
import ChatBackground from "../assets/ChatBackground.png";

const Chats = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/Chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
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
        <div className="flex bg-white rounded-xl shadow h-[80vh] overflow-hidden">
  {/* Contacts Sidebar */}
  <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
    {/* Inbox + Search */}
    <div className="p-4 border-b">
      <h2 className="font-semibold text-gray-800 text-lg mb-2">Inbox</h2>
      <input
        type="text"
        placeholder="Search chats"
        className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>

    {/* Contact List */}
    {[1, 2, 3, 4, 5, 6].map((chat, idx) => (
      <div
        key={chat}
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b ${
          idx === 0 ? "bg-[#F1EEF9]" : "hover:bg-purple-50"
        }`}
      >
        <img
          src={profileImage}
          alt="Contact"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="text-gray-800 font-medium text-sm">Sarah Thompson</h4>
          <p className="text-gray-500 text-xs truncate">
            Looking forward to our next session.
          </p>
        </div>
        <div className="text-xs text-gray-400">2:45 PM</div>
      </div>
    ))}
  </div>

  {/* Chat Area */}
  <div className="flex-1 flex flex-col">
    {/* Chat header */}
    <div className="flex items-center gap-3 px-4 py-3 border-b relative">
      <div className="relative">
        <img
          src={profileImage}
          alt="ChatUser"
          className="h-10 w-10 rounded-full object-cover"
        />
        {/* Online Indicator */}
        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <div>
        <h4 className="text-gray-800 font-semibold text-sm">Sarah Thompson</h4>
        <p className="text-xs text-gray-500">Online</p>
      </div>
    </div>

    {/* Chat messages area with background */}
    <div
      className="flex-1 p-4 space-y-6 overflow-y-auto relative"
      style={{
        backgroundImage: `url(${ChatBackground})`, // 🟣 ADD your chat background color or image here
        backgroundColor: "#F7F6FC"
      }}
    >
      {/* Message Left */}
      <div className="flex flex-col items-start">
        <div className="relative max-w-xs">
          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm rounded-bl-none">
            Hi there! I’m excited for our session.
          </div>
          <div className="absolute left-0 bottom-0 w-0 h-0 border-t-[10px] border-t-gray-200 border-l-[10px] border-l-transparent"></div>
        </div>
        <span className="text-[10px] text-gray-500 mt-1">June 30, 2:41 PM</span>
      </div>

      {/* Message Right */}
      <div className="flex flex-col items-end">
        <div className="relative max-w-xs">
          <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm rounded-br-none">
            Same here! Let’s get started soon.
          </div>
          <div className="absolute right-0 bottom-0 w-0 h-0 border-t-[10px] border-t-purple-500 border-r-[10px] border-r-transparent"></div>
        </div>
        <span className="text-[10px] text-gray-500 mt-1">June 30, 2:42 PM</span>
      </div>

      {/* Message Left */}
      <div className="flex flex-col items-start">
        <div className="relative max-w-xs">
          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm rounded-bl-none">
            Don’t forget to bring your notes. 😊
          </div>
          <div className="absolute left-0 bottom-0 w-0 h-0 border-t-[10px] border-t-gray-200 border-l-[10px] border-l-transparent"></div>
        </div>
        <span className="text-[10px] text-gray-500 mt-1">June 30, 2:43 PM</span>
      </div>
    </div>

    {/* Message input */}
    <div className="p-4 border-t bg-white">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button className="bg-transparent px-4 py-2 rounded-full text-sm">
          <Icon icon="ic:sharp-send" className="text-lg w-10 h-10 text-[#9363C4]" />
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Chats;