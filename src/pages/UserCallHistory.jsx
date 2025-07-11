import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import SideBar from '../components/SideBar';

export default function UserCallHistory() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const callHistoryData = [
        {
            id: "01",
            title: "Mental Health Sickness",
            name: "Sarah Thompson",
            expertise: "Mental Health",
            cost: "$100",
            duration: "30 mins",
            status: "Completed",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/women/87.jpg",
            review: "Very helpful session!",
        },
        {
            id: "02",
            title: "Career Guidance",
            name: "James Miller",
            expertise: "Career Coaching",
            cost: "$80",
            duration: "45 mins",
            status: "User Declined",
            rating: 0,
            image: "https://randomuser.me/api/portraits/men/36.jpg",
            review: "",
        },
        {
            id: "03",
            title: "Stress Management",
            name: "Amanda Lee",
            expertise: "Stress Management",
            cost: "$120",
            duration: "60 mins",
            status: "Coach Declined",
            rating: 0,
            image: "https://randomuser.me/api/portraits/women/56.jpg",
            review: "",
        },
    ];

    const handleAddReview = (user) => {
        setSelectedUser(user);
        setRating(0);
        setHoverRating(0);
        setReviewText("");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-4 md:p-6 overflow-x-hidden w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4 gap-4 sm:gap-0">
                    <h1 className="text-xl sm:text-2xl font-bold">Call History</h1>
                    <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative bg-white rounded-xl shadow p-4 gap-4 sm:gap-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-[#27272A] mt-2 sm:mt-4 mb-2 sm:mb-4 capitalize">Call History with life coaches</h2>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search User"
                            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm"
                        />
                        <button
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white p-[8.5px]"
                            title="Search"
                        >
                            <Icon icon="mdi:magnify" className="text-base sm:text-lg text-[#27272A] border-1 border-[#C8B8E8]" />
                        </button>
                    </div>
                </div>
                <div className='bg-white shadow rounded-xl overflow-x-auto mt-2'>
                    <table className="w-full text-xs sm:text-sm text-left text-gray-700 bg-white rounded-bl-xl rounded-br-xl p-6">
                        <thead className="border-b-1 border-gray-200">
                            <tr className='bg-[#F1EEf9]'>
                                <th className="py-2 px-2 sm:px-4 font-bold">Sr#</th>
                                <th className="py-2 px-2 sm:px-4 font-bold hidden sm:table-cell">Title</th>
                                <th className="py-2 px-2 sm:px-4 font-bold">User</th>
                                <th className="py-2 px-2 sm:px-4 font-bold">Status</th>
                                <th className="py-2 px-2 sm:px-4 font-bold hidden md:table-cell">Cost</th>
                                <th className="py-2 px-2 sm:px-4 font-bold hidden lg:table-cell">Duration</th>
                                <th className="py-2 px-2 sm:px-4 font-bold hidden xl:table-cell">Rate & Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {callHistoryData.map((call, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50  hover:shadow-[0_2px_8px_rgba(147,99,196,0.3)]">
                                    <td className="py-2 px-2 sm:px-4">{call.id}</td>
                                    <td className="py-2 px-2 sm:px-4 hidden sm:table-cell">{call.title}</td>
                                    <td className="py-2 px-2 sm:px-4">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={call.image}
                                                alt={call.name}
                                                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{call.name}</span>
                                                <span className="text-xs text-gray-500 sm:hidden">{call.title}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-2 sm:px-4">
                                        <span
                                            className={`px-2 rounded-lg py-1 text-xs font-semibold ${call.status === "Completed"
                                                ? "bg-green-100 text-green-600"
                                                : call.status === "User Declined"
                                                    ? "bg-red-100 text-red-500"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {call.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2 sm:px-4 hidden md:table-cell">{call.cost}</td>
                                    <td className="py-2 px-2 sm:px-4 hidden lg:table-cell">{call.duration}</td>
                                    <td className="py-2 px-2 sm:px-4 hidden xl:table-cell">
                                        {call.rating > 0 ? (
                                            <div className="flex items-center gap-1">
                                                <Icon icon="material-symbols:star" className="text-yellow-400 text-lg" />
                                                <span className="font-medium">{call.rating}</span>
                                                <span className="text-gray-500 text-sm">({call.review})</span>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col xl:flex-row gap-2'> 
                                                <p className='text-gray-400 font-extralight text-xs'>No review added yet.</p> 
                                                <button
                                                    onClick={() => handleAddReview(call)}
                                                    className="text-[#9363C4] hover:text-[#7a50b2] flex items-center gap-2 text-xs"
                                                >
                                                    Add Review <Icon icon="bx:message-edit" className="text-sm" />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 px-2 sm:px-4 gap-4 sm:gap-0">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <span>Rows per page:</span>
                        <select className="rounded px-2 py-1 text-xs sm:text-sm" defaultValue="5">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                        </select>
                        <p>1 - 5 of 20</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <button className="hover:text-gray-800">
                            <Icon icon="mdi:chevron-left" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button className="hover:text-gray-800">
                            <Icon icon="mdi:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

                {isModalOpen && selectedUser && (
                    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-md text-center">
                            <h2 className="text-xl font-semibold mb-4">How Clients are doing?</h2>
                            <img src={profileImage} alt={selectedUser.name} className="h-20 w-20 mx-auto rounded-full object-cover mb-4" />
                            <h3 className="text-lg font-medium">{selectedUser.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{selectedUser.expertise}</p>
                            <div className="flex justify-center items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Icon
                                        key={star}
                                        icon={star <= (hoverRating || rating) ? "material-symbols:star" : "material-symbols:star-outline"}
                                        className="text-yellow-400 text-2xl cursor-pointer"
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                            <textarea
                                rows="4"
                                placeholder="Write your review..."
                                className="w-full border border-gray-300 rounded p-2 text-sm resize-none"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            ></textarea>
                            <div className="mt-4">
                                <button onClick={closeModal} className="px-4 py-2 bg-[#9363C4] text-white rounded hover:bg-[#7a50b2]">Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}