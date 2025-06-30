
import { FaStar, FaRegCalendarAlt, FaPhoneAlt, FaComments } from "react-icons/fa";
import ProfilePicture from "../assets/card-image.png";
import { FaChevronDown } from "react-icons/fa";

type Coach = {
    name: string;
    expertise: string[];
    rating: number;
    reviews: number;
    callRate: string;
    messageRate: string;
    minuteBalance: string;
    image: string;
};

function Card({ coach }: { coach: Coach }) {
    return (
        <div className="rounded-4xl shadow p-6 bg-white w-full max-w-sm mx-auto flex flex-col items-start">
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

            <div className="mt-4 flex flex-wrap gap-2 w-full">
                <button className="flex items-center gap-2 px-2 py-2 bg-[#C8B8E8] text-black font-semibold text-xs rounded-md shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:bg-[#C8B8E8] transition">
                    <FaRegCalendarAlt className="text-gray" /> Book a call
                </button>
                <button className="flex items-center gap-2 px-2 py-2 bg-white border-1 border-[#9363C4aa] text-[#9363C4] text-xs font-semibold rounded-md hover:bg-gray-200 transition">
                    <FaPhoneAlt /> Call Now
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-white border-1 border-gray-400 text-gray-700 text-xs font-semibold rounded-md hover:bg-gray-200 transition">
                    <FaComments /> Chat
                </button>
            </div>
        </div>
    );
}

function FindCoach() {
    const coaches: Coach[] = new Array(8).fill({
        name: "Jane Doe",
        expertise: ["Relationships", "Career", "Anxiety"],
        rating: 4.9,
        reviews: "12K",
        callRate: "$6 / min",
        messageRate: "$6 / 100 word bundle",
        minuteBalance: "2 minutes",
        image: ProfilePicture,
    });

    return (
        <div className="p-8 bg-[#c4b3c33c] min-h-screen">
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-50 pt-8 pb-8">
                <h1 className="text-[32px] md:text-[50px] text-[#454545] -ml-25 font-medium capitalize">
                    Life Coaches
                </h1>

                <div className="flex gap-8 mt-4 -mr-20 md:mt-0">
                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-8 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10">
                            <option value="">Category</option>
                            <option value="career">Career</option>
                            <option value="relationship">Relationship</option>
                            <option value="wellness">Wellness</option>
                        </select>
                        <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    </div>

                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6">
                {coaches.map((coach, idx) => (
                    <Card key={idx} coach={coach} />
                ))}
            </div>

            <div>
                <button className='flex items-center gap-1 my-[40px] mx-auto px-6 py-4 bg-[#C8B8E8] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] text-[#454545] text-xs font-semibold rounded-lg hover:bg-purple-200 transition'>
                    View All Coaches
                </button>
            </div>
        </div>
    );
}

export default FindCoach;