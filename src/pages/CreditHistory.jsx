import React from "react";
import SideBar from "../components/SideBar";
import '../App.css'
import { Icon } from "@iconify/react";

export default function CreditHistory() {
    const getStatusClassName = (status) => {
        const baseClasses = "rounded-lg py-1 px-2 text-xs font-semibold";
        if (status === "Completed") {
            return `${baseClasses} bg-green-100 text-green-600`;
        } else if (status === "User Declined") {
            return `${baseClasses} bg-red-100 text-red-500`;
        } else {
            return `${baseClasses} bg-yellow-100 text-yellow-600`;
        }
    };

    return (
        <div className="flex  bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-4 md:p-6 overflow-x-hidden w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-6 gap-4 sm:gap-0">
                    <h1 className="text-xl sm:text-2xl font-bold">Credit History</h1>
                    <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition duration-200 ease-in-out">
                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Wallet Summary Card */}
                <h2 className="text-lg sm:text-xl font-semibold text-[#27272A] mb-4">Wallet Summary</h2>
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full max-w-md" >
                    <div className="bg-gradient-to-bl from-[#9363C340] via-white to-[#9363C430] w-full h-[200px] rounded-xl shadow-md p-4 sm:p-6 mb-2">


                        <div className="space-y-1">
                            <div>
                                <p className="text-sm sm:text-md mb-2 tracking-wide text-[#454545]">Wallet Balance</p>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#9363C4]">$45.00</h3>
                            </div>
                            <hr className="border-t mb-2 border-white" />
                            <div className="flex justify-between">
                                <p className="text-sm sm:text-md mb-4 tracking-wide text-gray-500">Total Spending</p>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-700">$230.00</h3>
                            </div>
                            <hr className="border-t mb-2 border-white" />
                            <div className="flex justify-between">
                                <p className="text-sm sm:text-md tracking-wide text-gray-500">Last Wallet Top-Up</p>
                                <h3 className="text-base sm:text-lg font-medium text-gray-700">July 5, 2025</h3>
                            </div>
                        </div>

                        {/* Buttons */}

                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
                        <button className="flex items-center shadow-xl justify-center gap-2 border border-[#9363C488] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-[#9363C4] hover:shadow-[0_8px_16px_rgba(147,99,196,0.5)] duration-200 ease-in-out">
                            <Icon icon="solar:card-outline" className="text-sm sm:text-lg" />
                            Manage Card
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#C8B8E8] text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg font-medium text-[#27272A] hover:shadow-[0_8px_16px_rgba(147,99,196,0.5)]">
                            <Icon icon="tabler:wallet" className="text-sm sm:text-lg" />
                            Top Up Wallet
                        </button>
                    </div>
                </div>

                {/* Placeholder for Future Content */}
                <div className="w-full bg-white rounded-xl shadow-md mt-8 p-4 sm:p-6">
                    {/* Table */}
                    <div className="flex flex-col sm:flex-row justify-between rounded-xl items-start sm:items-center mb-4 gap-4 sm:gap-0">
                        <h2 className="text-lg sm:text-2xl font-bold text-[#27272A] mt-2 sm:mt-4 mb-2 sm:mb-4">Call History with User</h2>

                        {/* Search Bar with Icon Button on Right */}
                        <div className="relative w-full sm:w-64">
                            <input
                                type="text"
                                placeholder="Search User"
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm "
                            />
                            <button
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white  p-[8.5px]"
                                title="Search"
                            >
                                <Icon icon="mdi:magnify" className="text-base sm:text-lg text-[#27272A]" />
                            </button>
                        </div>

                    </div>
                    <div className="bg-white shadow rounded-xl overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm text-left text-gray-700">
                            <thead className="border-b-2 border-gray-200">
                                <tr className="bg-[#F1EEF9]">
                                    <th className="py-2 px-2 sm:px-4 font-bold text-center">Sr#</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold ">Life Coach</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold hidden sm:table-cell">Date</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold text-center hidden md:table-cell">Balance Used</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold text-center hidden lg:table-cell">Duration</th>
                                    <th className="py-2 px-2 sm:px-4 font-bold text-center">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: "01",
                                        lifecoach: "Sarah Thompson",
                                        date: "20-Jun-2025",
                                        image: "https://randomuser.me/api/portraits/women/44.jpg",
                                        cost: "$100",
                                        duration: "30 mins",

                                        status: "Completed",
                                        rating: 4.5,
                                        review: "Very helpful session!",
                                    },
                                    {
                                        id: "02",
                                        lifecoach: "James Miller",
                                        date: "2023-07-15",
                                        image: "https://randomuser.me/api/portraits/men/46.jpg",
                                        cost: "$80",
                                        duration: "45 mins",
                                        status: "User Declined",

                                        review: "",
                                    },
                                    {
                                        id: "03",
                                        lifecoach: "Amanda Lee",
                                        date: "2023-07-20",
                                        image: "https://randomuser.me/api/portraits/women/46.jpg",
                                        cost: "$120",
                                        duration: "60 mins",
                                        status: "Coach Declined",

                                        rating: 0,
                                        review: "",
                                    },
                                ].map((call, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50  hover:shadow-[0_2px_8px_rgba(147,99,196,0.3)]">
                                        <td className="py-2 px-2 text-center">{call.id}</td>
                                        <td className="py-2 px-2">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={call.image}
                                                    alt={call.lifecoach}
                                                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{call.lifecoach}</span>
                                                    <span className="text-xs text-gray-500 sm:hidden">{call.date}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-2 px-2 hidden sm:table-cell">
                                            {call.date}
                                        </td>
                                        <td className="py-2 px-2 text-center hidden md:table-cell">{call.cost}</td>
                                        <td className="py-2 px-2 text-center hidden lg:table-cell">{call.duration}</td>
                                        <td className="py-2 px-2 text-center">
                                            <span
                                                className={getStatusClassName(call.status)}
                                            >
                                                {call.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                                } </tbody>

                        </table>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 px-2 sm:px-4 gap-4 sm:gap-0">
                        {/* Left side: Rows per page */}
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                            <span>Rows per page:</span>
                            <select className="rounded px-2 py-1 text-xs sm:text-sm" defaultValue="5">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                            <p>1 - 5 of 20</p>
                        </div>

                        {/* Right side: Pagination arrows */}
                        <div className="flex items-center  gap-2 text-gray-600">
                            <button className="hover:text-gray-800">
                                <Icon icon="mdi:chevron-left" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button className="hover:text-gray-800">
                                <Icon icon="mdi:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}