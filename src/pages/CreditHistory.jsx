import React from "react";
import SideBar from "../components/SideBar";
import profileImage from "../assets/profile.png";
import { Icon } from "@iconify/react";

export default function CreditHistory() {
    return (
        <div className="flex  bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full mb-6">
                    <h1 className="text-2xl font-bold">Credit History</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Wallet Summary Card */}
                <h2 className="text-lg font-semibold text-[#27272A] mb-4">Wallet Summary</h2>
                <div className="bg-white rounded-xl shadow-md p-6 w-fit" >
                    <div className="bg-gradient-to-bl from-[#9363C340] via-white to-[#9363C430] w-[355px] h-[200px] rounded-xl shadow-md p-6  max-w-md mb-2">


                        <div className="space-y-1">
                            <div>
                                <p className="text-md mb-2 tracking-wide text-[#454545]">Wallet Balance</p>
                                <h3 className="text-2xl font-bold text-[#9363C4]">$45.00</h3>
                            </div>
                            <hr className="border-t mb-2 border-white" />
                            <div className="flex justify-between">
                                <p className="text-md mb-4 tracking-wide text-gray-500">Total Spending</p>
                                <h3 className="text-lg font-semibold text-gray-700">$230.00</h3>
                            </div>
                            <hr className="border-t mb-2 border-white" />
                            <div className="flex justify-between">
                                <p className="text-md tracking-wide text-gray-500">Last Wallet Top-Up</p>
                                <h3 className="text-lg font-medium text-gray-700">July 5, 2025</h3>
                            </div>
                        </div>

                        {/* Buttons */}

                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="flex items-center gap-2 border border-[#9363C488] px-4 py-2 rounded-lg text-sm font-medium text-[#9363C4] hover:bg-gray-100">
                            <Icon icon="solar:card-outline" className="text-lg" />
                            Manage Card
                        </button>
                        <button className="flex items-center gap-2 bg-[#C8B8E8] text-sm px-4 py-2 rounded-lg font-medium text-[#27272A] hover:bg-[#b5a3db] transition">
                            <Icon icon="tabler:wallet" className="text-lg" />
                            Top Up Wallet
                        </button>
                    </div>
                </div>

                {/* Placeholder for Future Content */}
                <div className="w-full bg-white rounded-xl shadow-md mt-8 p-6">
                    {/* Table */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-[#27272A] mt-4 mb-4">Call History with User</h2>

                        {/* Search Bar with Icon Button on Right */}
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search User"
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-sm "
                            />
                            <button
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white  p-[8.5px]"
                                title="Search"
                            >
                                <Icon icon="mdi:magnify" className="text-lg text-[#27272A]" />
                            </button>
                        </div>

                    </div>
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="border-b-2 border-gray-200">
                            <tr>
                                <th className="py-2 px-4 font-bold text-center">Sr#</th>
                                <th className="py-2 px-8 font-bold ">Life Coach</th>
                                <th className="py-2 px-4 font-bold ">Date</th>
                                <th className="py-2 px-4 font-bold text-center">Balance Used</th>
                                <th className="py-2 px-4 font-bold text-center">Duration</th>
                                <th className="py-2 px-4 font-bold text-center">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    id: "01",
                                    lifecoach: "Sarah Thompson",
                                    date: "2023-07-10",
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
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-2 px-2 text-center">{call.id}</td>
                                    <td className="py-2 px-2 gap-2 flex justify-start items-center"> <img
                                        src={call.image}
                                        alt={call.lifecoach}
                                        className="h-8 w-8 rounded-full object-cover"
                                    />{call.lifecoach}</td>

                                    <td className="py-2 ">
                                        {call.date}
                                    </td>
                                    <td className="py-2  text-center">{call.cost}</td>
                                    <td className="py-2 text-center">{call.duration}</td>
                                    <td className="py-2  text-center">
                                        <span
                                            className={` rounded-lg py-2  text-xs font-semibold
                             ${call.status === "Completed"
                                                    ? "bg-green-100 text-green-600 px-8"
                                                    : call.status === "User Declined"
                                                        ? "bg-red-100 text-red-500 px-6"
                                                        : "bg-yellow-100 text-yellow-600 px-5"
                                                }`}
                                        >
                                            {call.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div className="flex flex-row justify-between items-center mt-4 px-4">
                        {/* Left side: Rows per page */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Rows per page:</span>
                            <select className=" rounded px-2 py-1 text-sm">
                                <option value="5" selected>5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                            <p>1 - 5 of 20</p>
                        </div>

                        {/* Right side: Pagination arrows */}
                        <div className="flex items-center  gap-2 text-gray-600">
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
        </div>
    );
}