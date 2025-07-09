import { Icon } from "@iconify/react";
import { useState } from "react";
import backgroundImage from "../assets/withoutStroke.png";
import SideBar from "../components/SideBar";

export default function UserProfile() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            {/* Main Area */}
            <div className="flex-1 p-6 flex flex-col ">
                {/* Header */}
                <div className="flex justify-between items-center w-full mb-10">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <div className="flex items-center gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Centered Background Image */}
                <div className="relative w-full max-w-5xl mx-auto h-50 rounded-xl  overflow-hidden z-0"  >
                    <img
                        src={backgroundImage}
                        alt="Profile Background"
                        className="w-full h-[350px] object-cover"
                    />
                </div>

                {/* Profile Image */}
                <div className="relative z-10 flex justify-center -mt-38 hover:scale-105 transition duration-200 ease-in-out" >
                    <div className="relative w-32 h-32">
                        <img
                            src="https://randomuser.me/api/portraits/men/20.jpg"
                            alt="User"
                            className="w-full h-full object-cover rounded-full border-2 p-1 border-[#C8B8E8] border-dashed shadow-lg"
                        />
                        <button className="absolute bottom-0 right-0 bg-[#BBA5E0] p-1 rounded-full shadow">
                            <Icon icon="fluent:camera-28-regular" className="text-gray-700 text-lg" />
                        </button>
                        <p className="text-2xl font-semibold mt-2 text-center">John Doe</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white shadow rounded-2xl p-6 w-full max-w-5xl mx-auto mt-2 mb-5">
                    <h1 className="text-xl font-semibold mb-6">Personal Information</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Name */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="iconoir:user" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="fluent:mail-20-regular" className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lucide:phone-call" className="w-5 h-5" />
                            </div>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Change Password Section */}
                <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-5">
                    <h1 className="text-xl font-semibold mb-6">Change Password</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                <div className="flex flex-row justify-between rounded-xl p-6 w-full max-w-5xl mx-auto mb-5">
                    <button className="text-red-600 border border-red-600 px-4 py-2 rounded-lg font-light">
                        Deactivate Account
                    </button>
                    <button className="bg-[#C8B8E8] flex flex-row gap-2 px-4 py-2 rounded-lg font-medium text-[#27272A] transition">
                        <Icon icon="mynaui:save" className="w-5 h-5 mt-1" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}