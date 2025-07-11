import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Icon } from "@iconify/react";


const dummyData = {
    chat: [
        { id: 1, coach: "Sarah Johnson", title: "Mindfulness Tips", count: '$20.00 - Up to 34', cost: "$12.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 2, coach: "David Lee", title: "Productivity Hacks", count: '$20.00 - Up to 34', cost: "$8.50", image: "https://randomuser.me/api/portraits/men/46.jpg" },
        { id: 3, coach: "Maria Smith", title: "Self-esteem Session", count: '$20.00 - Up to 34', cost: "$7.20", image: "https://randomuser.me/api/portraits/women/50.jpg" },
        { id: 4, coach: "James Patel", title: "Career Talk", count: '$20.00 - Up to 34', cost: "$6.80", image: "https://randomuser.me/api/portraits/men/30.jpg" },
        { id: 5, coach: "Liam Brown", title: "Speaking Tips", count: '$20.00 - Up to 34', cost: "$5.50", image: "https://randomuser.me/api/portraits/men/20.jpg" },
    ],
    call: [
        { id: 1, coach: "Sarah Johnson", title: "Mindfulness Call", duration: "$20.00 - Up to 34", cost: "$25.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 2, coach: "David Lee", title: "Productivity Call", duration: "$20.00 - Up to 34", cost: "$18.00", image: "https://randomuser.me/api/portraits/men/46.jpg" },
        { id: 3, coach: "Maria Smith", title: "Self-esteem Call", duration: "$20.00 - Up to 34", cost: "$20.00", image: "https://randomuser.me/api/portraits/women/50.jpg" },
        { id: 4, coach: "James Patel", title: "Career Coaching", duration: "$20.00 - Up to 34", cost: "$17.00", image: "https://randomuser.me/api/portraits/men/30.jpg" },
        { id: 5, coach: "Liam Brown", title: "Public Speaking", duration: "$20.00 - Up to 34", cost: "$13.50", image: "https://randomuser.me/api/portraits/men/20.jpg" },
    ],
};

const Expenses = () => {
    const [selectedFilter, setSelectedFilter] = useState("chat");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const dataToShow = dummyData[selectedFilter];

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-4 md:p-6 overflow-x-hidden w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-6 gap-4 sm:gap-0">
                    <h1 className="text-xl sm:text-2xl font-bold">Expenses</h1>

                    <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@domain.com</div>
                        </div>
                    </div>
                </div>

                {/* Filters and Summary */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 bg-white p-3 sm:p-4 rounded-xl shadow border border-gray-200 gap-4 lg:gap-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full lg:w-auto">
                        <p className="text-sm sm:text-base font-medium">Filter</p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="filter"
                                    value="chat"
                                    checked={selectedFilter === "chat"}
                                    onChange={() => setSelectedFilter("chat")}
                                    className="form-radio text-purple-600"
                                />
                                <span className="ml-2 text-xs sm:text-sm text-gray-700">Chat Expenses</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="filter"
                                    value="call"
                                    checked={selectedFilter === "call"}
                                    onChange={() => setSelectedFilter("call")}
                                    className="form-radio text-purple-600"
                                />
                                <span className="ml-2 text-xs sm:text-sm text-gray-700">Call Expenses</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full lg:w-auto max-w-md p-3 justify-between items-start sm:items-center gap-2 bg-white rounded-lg shadow border border-gray-200 hover:scale-105 transition duration-200 ease-in-out">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#E0F6ED] p-2 rounded-lg"><Icon icon="mdi:currency-usd" className="text-green-500 text-2xl sm:text-3xl" /></div>
                            <div className="text-xs sm:text-sm">
                                <div className="text-gray-600">{selectedFilter === "chat" ? "Chat Expense" : "Call Expense"}</div>
                                <div className="font-semibold text-black text-sm sm:text-base">$99.00</div>
                            </div>
                        </div>

                        <span className="text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center gap-1 text-[#7F7F7F]">
                            <span>+5.00 (+12.5%)</span>
                            <span className="flex items-center gap-1"><Icon icon='mdi:arrow-top-thick' className="text-green-500 text-lg sm:text-xl" /> Last Month</span>
                        </span>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded-xl overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                        <thead className="bg-[#F1EEF9] text-gray-700">
                            <tr>
                                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left">Sr#</th>
                                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left">Life Coach</th>
                                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left hidden sm:table-cell">Title/Session</th>
                                {selectedFilter === "chat" ? (
                                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left hidden md:table-cell">Message Count with Chat Expenses</th>
                                ) : (
                                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left hidden md:table-cell">Duration with Expense</th>
                                )}
                                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-[#27272A] ">
                            {dataToShow.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(147,99,196,0.3)]">
                                    <td className="px-3 sm:px-6 py-2 sm:py-4 ">{idx + 1}</td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-4">
                                        <div className="flex items-center gap-2">
                                            <img src={item.image} alt="User profile" className="h-6 w-6 sm:h-9 sm:w-9 rounded-full" />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.coach}</span>
                                                <span className="text-xs text-gray-500 sm:hidden">{item.title}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-4 hidden sm:table-cell">{item.title}</td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-4 hidden md:table-cell">
                                        {selectedFilter === "chat" ? `${item.count} messages` : `${item.duration} messages`}
                                    </td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium">{item.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-600">Rows per page:</span>
                        <select
                            className="text-xs sm:text-sm border border-gray-300 rounded px-2 py-1"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className="px-2 py-1 border border-gray-300 rounded disabled:opacity-50"
                        >
                            <Icon icon="mdi:chevron-left" className="text-sm sm:text-base" />
                        </button>
                        <span className="text-xs sm:text-sm text-gray-600">Page {page}</span>
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-2 py-1 border border-gray-300 rounded"
                        >
                            <Icon icon="mdi:chevron-right" className="text-sm sm:text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expenses;
