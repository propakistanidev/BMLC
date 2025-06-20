import { FaStar, FaRegCalendarAlt, FaPhoneAlt, FaComments } from "react-icons/fa";
import ProfilePicture from "../assets/card-image.png";


type Coach = {
    name: string;
    expertise: string[];
    rating: number;
    reviews: number;
    callRate: string;
    messageRate: string;
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

            <hr className="my-3 w-full text-gray-400" />


            <div className="text-xs text-gray-600 w-full">
                <p><span className="font-semibold">Call Rate:</span> {coach.callRate}</p>
                <p className="mt-1"><span className="font-semibold">Message Rate:</span> {coach.messageRate}</p>
            </div>


            <div className="mt-4 flex flex-wrap gap-2 w-full">
                <button className="flex items-center gap-1 px-9 py-2 bg-purple-300 text-black font-semibold text-xs rounded-full hover:bg-purple-200 transition">
                    <FaRegCalendarAlt className="text-gray" /> Book
                </button>
                <button className="flex items-center gap-1 px-8 py-2 bg-white border text-purple-600 text-xs font-semibold rounded-full hover:bg-gray-200 transition">
                    <FaPhoneAlt /> Call
                </button>
                <button className="flex items-center gap-1 px-6 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full hover:bg-gray-200 transition">
                    <FaComments /> Chat
                </button>
            </div>
        </div>

    );
}

function FindCoach() {
    const coaches: Coach[] = new Array(6).fill({
        name: "Jane Doe",
        expertise: ["Relationships", "Career", "Anxiety"],
        rating: 4.9,
        reviews: "12K",
        callRate: "$2/min",
        messageRate: "$1/message",
        image: ProfilePicture,
    });

    return (
        <div className="p-8 bg-[#F1EEF9] min-h-screen">
            {/* Section Heading */}
            <h1 className="p-[50px] md:text-[50px] text-[#333333] text-lightBlack font-medium capitalize text-center">
                Find Your Coach
            </h1>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10">
                {coaches.map((coach, idx) => (
                    <Card key={idx} coach={coach} />
                ))}
            </div>
            <div><button className='flex items-center gap-1 my-[40px] mx-auto px-6 py-4 bg-[#C8B8E8] text-[#333333] text-xs font-semibold rounded-full hover:bg-purple-200 transition'>View All Coaches</button></div>
        </div>


    );
}

export default FindCoach;

{/* <button class="px-6 py-3 text-[#00eeff] border-2 border-[#00eeff] rounded-md font-bold text-base bg-transparent cursor-pointer shadow-[0_0_5px_#00eeff,0_0_10px_#00eeff] transition-all duration-300 ease-in-out hover:bg-[#00eeff] hover:text-black hover:shadow-[0_0_10px_#00eeff,0_0_20px_#00eeff,0_0_40px_#00eeff]">Button</button> */ }

// 'flex items-center gap-1 my-[40px] mx-auto px-6 py-4 bg-[#C8B8E8] text-[#333333] text-xs font-semibold rounded hover:bg-purple-200 transition'