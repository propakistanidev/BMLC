import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.png";

const daysOfWeek = [
    { name: "Monday", short: "Mon" },
    { name: "Tuesday", short: "Tue" },
    { name: "Wednesday", short: "Wed" },
    { name: "Thursday", short: "Thu" },
    { name: "Friday", short: "Fri" },
    { name: "Saturday", short: "Sat" },
    { name: "Sunday", short: "Sun" },
];

const Availability = () => {
    const [availability, setAvailability] = useState(
        daysOfWeek.map((day, idx) => ({
            day: day.name,
            short: day.short,
            unavailable: idx >= 5, // Mark Saturday & Sunday as unavailable
            slots: idx >= 5 ? [] : [{ start: "", end: "" }],
        }))
    );

    const handleSlotChange = (dayIndex, slotIndex, field, value) => {
        const updated = [...availability];
        updated[dayIndex].slots[slotIndex][field] = value;
        setAvailability(updated);
    };

    const addSlot = (dayIndex) => {
        const updated = [...availability];
        updated[dayIndex].slots.push({ start: "", end: "" });
        setAvailability(updated);
    };

    const removeSlot = (dayIndex, slotIndex) => {
        const updated = [...availability];
        updated[dayIndex].slots.splice(slotIndex, 1);
        setAvailability(updated);
    };

    const toggleUnavailable = (dayIndex) => {
        const updated = [...availability];
        updated[dayIndex].unavailable = !updated[dayIndex].unavailable;
        if (updated[dayIndex].unavailable) {
            updated[dayIndex].slots = [];
        } else {
            updated[dayIndex].slots = [{ start: "", end: "" }];
        }
        setAvailability(updated);
    };

    return (
        <div className="flex h-screen bg-[#F8F6FC]">
            {/* Sidebar */}
            <div className="bg-white w-60 p-4 flex flex-col justify-between border-r">
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <img src={logo} alt="Logo" className="h-10" />
                        <Icon icon="mdi:menu" className="text-2xl text-purple-400 cursor-pointer" />
                    </div>
                    <nav className="space-y-4 text-sm text-gray-600">
                        {[
                            { label: "Home", icon: "mynaui:home", to: "/AdminPanel" },
                            { label: "My Sessions", icon: "solar:calendar-linear", to: "/Sessions" },
                            { label: "Chats", icon: "fluent:chat-20-regular", to: "/Chats" },
                            { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
                            { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
                            { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
                            { label: "Call History", icon: "solar:phone-linear", to: "/calls" },
                        ].map((tab, i) => (
                            <div key={i} className="flex items-center gap-3 cursor-pointer hover:bg-purple-100 px-2 py-2 rounded-md">
                                <Icon icon={tab.icon} className="text-lg" />
                                <span>{tab.label}</span>
                            </div>
                        ))}
                    </nav>
                </div>
                <button
                    className="flex items-center gap-2 text-sm text-[#FF0000] border border-[#FF0000] px-3 py-2 rounded-md"
                    onClick={() => (window.location.href = "/")}
                >
                    <Icon icon="mdi:logout" />
                    Logout
                </button>
            </div>

            {/* Main Section */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Top Admin Info */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#27272A]">Availability</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="Profile" className="h-9 w-9 rounded-full" />
                        <div className="text-sm text-left">
                            <div className="font-medium text-gray-800">Admin</div>
                            <div className="text-xs text-gray-500">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>

                {/* Weekly Hours */}
                <h2 className="text-lg font-semibold mb-4">Weekly Hours</h2>
                <div className="space-y-4">
                    {availability.map((day, dayIndex) => (
                        <div key={day.day} className="bg-white rounded-xl p-4 shadow border flex flex-col sm:flex-row sm:items-center gap-4">
                            {/* Day Circle */}
                            <div className="flex items-center gap-3 w-32">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border text-sm font-semibold text-gray-700">
                                    {day.short}
                                </div>
                                <button
                                    onClick={() => toggleUnavailable(dayIndex)}
                                    className={`text-xs px-2 py-1 rounded border ${day.unavailable ? "bg-red-100 text-red-600 border-red-400" : "bg-green-100 text-green-600 border-green-400"}`}
                                >
                                    {day.unavailable ? "Unavailable" : "Available"}
                                </button>
                            </div>

                            {/* Time Slots */}
                            {!day.unavailable && (
                                <div className="flex flex-wrap items-center gap-4 flex-1">
                                    {day.slots.map((slot, slotIndex) => (
                                        <div key={slotIndex} className="flex items-center gap-2">
                                            <input
                                                type="time"
                                                className="border rounded px-2 py-1 text-sm"
                                                value={slot.start}
                                                onChange={(e) =>
                                                    handleSlotChange(dayIndex, slotIndex, "start", e.target.value)
                                                }
                                            />
                                            <span className="text-sm">-</span>
                                            <input
                                                type="time"
                                                className="border rounded px-2 py-1 text-sm"
                                                value={slot.end}
                                                onChange={(e) =>
                                                    handleSlotChange(dayIndex, slotIndex, "end", e.target.value)
                                                }
                                            />
                                            <button onClick={() => removeSlot(dayIndex, slotIndex)}>
                                                <Icon icon="mdi:close" className="text-red-500" />
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={() => addSlot(dayIndex)} className="text-purple-600">
                                        <Icon icon="mdi:plus-circle-outline" className="text-lg" />
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <Icon icon="mdi:content-copy" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Availability;

