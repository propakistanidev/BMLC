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

            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full mb-6">
                    <h1 className="text-2xl font-bold">Expenses</h1>

                    <div className="flex items-center gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@domain.com</div>
                        </div>
                    </div>
                </div>

                {/* Filters and Summary */}
                <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl shadow border border-gray-200">
                    <div className="flex items-center gap-4"><p>Filter</p>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="filter"
                                value="chat"
                                checked={selectedFilter === "chat"}
                                onChange={() => setSelectedFilter("chat")}
                                className="form-radio text-purple-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Chat Expenses</span>
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
                            <span className="ml-2 text-sm text-gray-700">Call Expenses</span>
                        </label>
                    </div>

                    <div className="flex flex-row w-[500px] p-3 justify-between items-center gap-2 bg-white  rounded-lg shadow border border-gray-200 hover:scale-105 transition duration-200 ease-in-out">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#E0F6ED] p-2 rounded-lg"><Icon icon="mdi:currency-usd" className="text-green-500 text-3xl" /></div><div className="text-sm">
                                <div className="text-gray-600">{selectedFilter === "chat" ? "Chat Expense" : "Call Expense"}</div>
                                <div className="font-semibold text-black">$99.00</div>
                            </div>
                        </div>

                        <span className="text-sm flex gap-1 text-[#7F7F7F]">+5.00 (+12.5%) <span><Icon icon='mdi:arrow-top-thick' className="text-green-500 text-xl" /></span> Last Month</span>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded-xl overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-[#F1EEF9] text-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left">Sr#</th>
                                <th className="px-6 py-3 text-left">Life Coach</th>
                                <th className="px-6 py-3 text-left">Title/Session</th>
                                {selectedFilter === "chat" ? (
                                    <th className="px-6 py-3 text-left">Message Count with Chat Expenses</th>
                                ) : (
                                    <th className="px-6 py-3 text-left">Duration with Expense</th>
                                )}
                                <th className="px-6 py-3 text-left">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-[#27272A] ">
                            {dataToShow.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 ">{idx + 1}</td>
                                    <td className="px-6 py-4 flex items-center gap-2"><img src={item.image} alt="User profile" className="h-9 w-9 rounded-full" />{item.coach}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4">
                                        {selectedFilter === "chat" ? `${item.count} messages` : `${item.duration} messages`}
                                    </td>
                                    <td className="px-6 py-4 font-medium">{item.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Rows per page:</span>
                        <select
                            className="text-sm border border-gray-300 rounded px-2 py-1"
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
                            <Icon icon="mdi:chevron-left" />
                        </button>
                        <span className="text-sm text-gray-600">Page {page}</span>
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-2 py-1 border border-gray-300 rounded"
                        >
                            <Icon icon="mdi:chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expenses;
