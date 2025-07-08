import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Icon } from "@iconify/react";
import profileImage from "../assets/profile.png";

const dummyData = {
    chat: [
        { id: 1, coach: "Sarah Johnson", title: "Mindfulness Tips", count: 34, cost: "$12.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 2, coach: "David Lee", title: "Productivity Hacks", count: 22, cost: "$8.50", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 3, coach: "Maria Smith", title: "Self-esteem Session", count: 18, cost: "$7.20", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 4, coach: "James Patel", title: "Career Talk", count: 15, cost: "$6.80", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 5, coach: "Liam Brown", title: "Speaking Tips", count: 11, cost: "$5.50", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    ],
    call: [
        { id: 1, coach: "Sarah Johnson", title: "Mindfulness Call", duration: "45 mins", cost: "$25.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 2, coach: "David Lee", title: "Productivity Call", duration: "30 mins", cost: "$18.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 3, coach: "Maria Smith", title: "Self-esteem Call", duration: "40 mins", cost: "$20.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 4, coach: "James Patel", title: "Career Coaching", duration: "35 mins", cost: "$17.00", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 5, coach: "Liam Brown", title: "Public Speaking", duration: "25 mins", cost: "$13.50", image: "https://randomuser.me/api/portraits/women/44.jpg" },
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

                    <div className="flex items-center gap-3">
                        <button className="text-[#3C3C3C] font-light px-4 py-2 rounded flex items-center gap-2 border border-gray-200">
                            <Icon icon="prime:wallet" className="text-2xl" />
                            Wallet Balance: <span className="text-[#9363C4] font-medium">$20</span>
                        </button>
                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
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

                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow border border-gray-200">
                        <Icon icon="mdi:currency-usd" className="text-green-500 text-xl" />
                        <div className="text-sm">
                            <div className="text-gray-600">{selectedFilter === "chat" ? "Chat Expense" : "Call Expense"}</div>
                            <div className="font-semibold text-black">$99.00</div>
                        </div>
                        <span className="text-green-600 animate-pulse text-sm">▲</span>
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
                        <tbody className="bg-white divide-y divide-gray-100">
                            {dataToShow.map((item, idx) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4">{idx + 1}</td>
                                    <td className="px-6 py-4 flex items-center gap-2"><img src={item.image} alt="User profile" className="h-9 w-9 rounded-full" />{item.coach}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4">
                                        {selectedFilter === "chat" ? `${item.count} msgs` : item.duration}
                                    </td>
                                    <td className="px-6 py-4 font-semibold">{item.cost}</td>
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
