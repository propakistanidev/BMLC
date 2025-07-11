
import { FaStar, FaRegCalendarAlt, FaPhoneAlt, FaComments } from "react-icons/fa";
import ProfilePicture from "../assets/card-image.png";
import { FaChevronDown } from "react-icons/fa";

type Coach = {
    name: string;
    expertise: string[];
    rating: number;
    reviews: string;
    callRate: string;
    messageRate: string;
    minuteBalance: string;
    image: string;
};

function Card({ coach }: { coach: Coach }) {
    return (
        <div className="rounded-xl shadow p-3 sm:p-4 bg-white max-w-xs mx-auto w-full flex flex-col items-start h-full ">
            <div className="relative">
                <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div className="absolute top-0 left-14 bg-white px-1 py-0.5 flex items-center gap-1 rounded-full text-green-600 text-[10px] font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Available
                </div>
            </div>

            <h2 className="mt-4 text-base font-semibold text-gray-800">{coach.name}</h2>
            <p className="text-xs text-gray-500 mt-1">
                {coach.expertise.join(" | ")}
            </p>

            <div className="flex items-center mt-2 text-yellow-500 text-xs">
                <span className="font-medium text-gray-700 mr-1">{coach.rating}</span>
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        className={i < Math.round(coach.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                ))}
                <span className="text-gray-500 ml-2">({coach.reviews})</span>
            </div>

            <hr className="my-3 w-full text-gray-200" />

            <div className="text-xs text-gray-600 w-full">
                <p><span className="font-medium text-xs text-gray-500">Call Rate:</span> <span className="font-semibold">{coach.callRate}</span></p>
                <p className="mt-1"><span className="font-medium text-xs text-gray-500">Message Rate:</span> <span className="font-semibold">{coach.messageRate}</span></p>
                <p className="mt-1"><span className="font-medium text-xs text-gray-500">Minute Balance:</span><span className="font-semibold"> {coach.minuteBalance}</span></p>
            </div>

            <div className="mt-auto pt-4 flex flex-wrap gap-2 w-full ml-2">
                <button className="flex items-center gap-1 px-2 py-1 bg-[#C8B8E8] text-black font-semibold text-xs rounded-md shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:bg-[#C8B8E8] transition">
                    <FaRegCalendarAlt className="text-gray" /> Book a call
                </button>
                <button className="flex items-center gap-1 px-4 py-2 bg-white border-1 border-[#9363C4aa] text-[#9363C4] text-xs font-semibold rounded-md hover:bg-gray-200 transition">
                    <FaPhoneAlt /> Call
                </button>
                <button className="flex items-center gap-1 px-4 py-2 bg-white border-1 border-gray-400 text-gray-700 text-xs font-semibold rounded-md hover:bg-gray-200 transition">
                    <FaComments /> Chat
                </button>
            </div>
        </div>
    );
}

function FindCoach() {
    const coaches: Coach[] = [
        {
            name: "Jane Doe",
            expertise: ["Relationships", "Career", "Anxiety"],
            rating: 4.9,
            reviews: "12K",
            callRate: "$6 / min",
            messageRate: "$6 / 100 word bundle",
            minuteBalance: "2 minutes",
            image: "https://randomuser.me/api/portraits/women/34.jpg"
        },
        {
            name: "Dr. Sarah Johnson",
            expertise: ["Stress Management", "Mindfulness"],
            rating: 4.8,
            reviews: "8.5K",
            callRate: "$8 / min",
            messageRate: "$8 / 100 word bundle",
            minuteBalance: "3 minutes",
            image: ProfilePicture,
        },
        {
            name: "Michael Chen",
            expertise: ["Career Transition", "Leadership"],
            rating: 4.7,
            reviews: "6.2K",
            callRate: "$10 / min",
            messageRate: "$10 / 100 word bundle",
            minuteBalance: "1 minute",
            image: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        {
            name: "Emma Rodriguez",
            expertise: ["Life Balance", "Personal Growth"],
            rating: 4.9,
            reviews: "15K",
            callRate: "$7 / min",
            messageRate: "$7 / 100 word bundle",
            minuteBalance: "4 minutes",
            image: "https://randomuser.me/api/portraits/women/67.jpg",
        },
        {
            name: "David Thompson",
            expertise: ["Anxiety", "Depression", "Trauma"],
            rating: 4.6,
            reviews: "9.8K",
            callRate: "$12 / min",
            messageRate: "$12 / 100 word bundle",
            minuteBalance: "2 minutes",
            image: "https://randomuser.me/api/portraits/men/56.jpg",
        },
        {
            name: "Lisa Martinez",
            expertise: ["Relationships", "Communication"],
            rating: 4.8,
            reviews: "11K",
            callRate: "$9 / min",
            messageRate: "$9 / 100 word bundle",
            minuteBalance: "3 minutes",
            image: "https://randomuser.me/api/portraits/women/10.jpg",
        },
        {
            name: "Robert Kim",
            expertise: ["Career Development", "Confidence"],
            rating: 4.7,
            reviews: "7.3K",
            callRate: "$11 / min",
            messageRate: "$11 / 100 word bundle",
            minuteBalance: "1 minute",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            name: "Amanda Foster",
            expertise: ["Wellness", "Self-Care", "Motivation"],
            rating: 4.9,
            reviews: "13K",
            callRate: "$8 / min",
            messageRate: "$8 / 100 word bundle",
            minuteBalance: "5 minutes",
            image: "https://randomuser.me/api/portraits/women/87.jpg",
        },


    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-[#c4b3c33c] min-h-screen">
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 sm:px-6 md:px-12 pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
                <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] text-[#454545] font-medium capitalize">
                    Life Coaches
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-0">
                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 sm:px-6 md:px-8 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10 w-full sm:w-auto">
                            <option value="">Category</option>
                            <option value="career">Career</option>
                            <option value="relationship">Relationship</option>
                            <option value="wellness">Wellness</option>
                        </select>
                        <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    </div>

                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 sm:px-6 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10 w-full sm:w-auto">
                            <option value="">Sort By</option>
                            <option value="rating">Top Rated</option>
                            <option value="experience">Most Experienced</option>
                            <option value="priceLow">Price: Low to High</option>
                        </select>
                        <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    </div>
                </div>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-6 gap-x-0">
                {coaches.map((coach, idx) => (
                    <Card key={idx} coach={coach} />
                ))}
            </div>

            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                <button className='flex items-center gap-1 px-6 py-3 sm:py-4 bg-[#C8B8E8] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] text-[#454545] text-xs sm:text-sm font-semibold rounded-lg hover:bg-purple-200 transition'>
                    View All Coaches
                </button>
            </div>
        </div>
    );
}

export default FindCoach;