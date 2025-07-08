

import { Icon } from "@iconify/react";

const CoachCard = ({ coach }) => {

    return (


        <div className="bg-white rounded-xl shadow-2xl p-6 w-full h-[350px]">
            {/* Image + Name + Expertise + Rating */}
            <div className="flex flex-col items-start relative">
                <div className="relative">
                    <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    {coach.online && (
                        <span className="flex items-center justify-center absolute top-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full">
                            <p className="absolute -top-1 left-1 flex items-center text-green-500 text-xs ml-4">Available</p>
                        </span>
                    )}
                </div>

                <h2 className="text-lg font-semibold mt-3">{coach.name}</h2>
                <p className="text-sm text-gray-500">{coach.expertise}</p>

                {/* Star Rating */}
                <div className="flex gap-4 items-center">
                    <p className="text-sm">{coach.rating.toFixed(1)}</p>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                            key={i}
                            icon={i < Math.floor(coach.rating) ? "mdi:star" : "mdi:star-outline"}
                            className={`text-xl ${i < Math.floor(coach.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                    <p className="text-sm text-gray-500">({coach.reviews})</p>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-200" />

            {/* Stats Section */}
            <div className="flex flex-col justify-around text-sm text-gray-600 mb-4">
                <div className="flex flex-row items-center gap-1 text-center">
                    <p className="text-md">Calls</p>
                    <p className="font-medium">{coach.calls}</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-center">
                    <p className="text-md">Messages</p>
                    <p className="font-medium">{coach.messages}</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-center">
                    <p className="text-md">Minute Balance</p>
                    <p className="font-medium">{coach.minutes} min</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2">
                <button className="bg-[#C8B8E8] flex items-center gap-2 text-black text-xs py-2 px-4 font-medium rounded-md">
                    <Icon icon='solar:calendar-linear' className="w-4 h-4" />
                    Book a Call
                </button>
                <button className="bg-white flex items-center gap-2 text-[#9363C4] border border-[#9363C4] py-2 px-3 text-xs font-medium rounded-md">
                    <Icon icon='proicons:call' className="w-4 h-4" />
                    Call Now
                </button>
                <button className="bg-gray-100 flex items-center gap-2 text-black py-1 px-2 rounded-md text-xs font-medium border border-gray-300">
                    <Icon icon='humbleicons:chat' className="w-4 h-4" />
                    Chat
                </button>
            </div>
        </div>
    );
};

export default CoachCard;