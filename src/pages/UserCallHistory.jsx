import React from 'react';
import { Icon } from '@iconify/react';
import profileImage from '../assets/profile.png';
import SideBar from '../components/SideBar';

export default function UserCallHistory() {
    const callHistoryData = [
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
    ];

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full mb-4">
                    <h1 className="text-2xl font-bold">Home</h1>
                    <div className="flex items-center gap-3">
                        <button className="text-[#3C3C3C] font-light px-4 py-2 rounded flex items-center gap-2 border border-gray-200">
                            <Icon icon="prime:wallet" className="text-2xl" />
                            Wallet Balance: <span className="text-[#9363C4] font-medium">$20</span>
                        </button>
                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Call History Section */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#27272A] mt-4 mb-4">Call History with User</h2>

                    {/* Search Bar */}
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search User"
                            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white p-[8.5px]"
                            title="Search"
                        >
                            <Icon icon="mdi:magnify" className="text-lg text-[#27272A]" />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th className="py-2 px-4 font-bold">Sr#</th>
                            <th className="py-2 px-4 font-bold">Title</th>
                            <th className="py-2 px-4 font-bold">User</th>
                            <th className="py-2 px-4 font-bold">Status</th>
                            <th className="py-2 px-4 font-bold">Cost</th>
                            <th className="py-2 px-4 font-bold">Duration</th>
                            <th className="py-2 px-4 font-bold">Rate & Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callHistoryData.map((call, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
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
                                        className={`px-2 rounded-lg py-2 text-xs font-semibold ${call.status === "Completed"
                                            ? "bg-green-100 text-green-600 px-8"
                                            : call.status === "User Declined"
                                                ? "bg-red-100 text-red-500 px-6"
                                                : "bg-yellow-100 text-yellow-600 px-5"
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

                {/* Pagination */}
                <div className="flex flex-row justify-between items-center mt-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Rows per page:</span>
                        <select className="rounded px-2 py-1 text-sm">
                            <option value="5" defaultValue>5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                        </select>
                        <p>1 - 5 of 20</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <button className="hover:text-gray-800">
                            <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-800">
                            <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}