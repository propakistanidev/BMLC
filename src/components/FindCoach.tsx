import { FaStar, FaRegCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import ProfilePicture from "../assets/card-image.png";
import { BsChatText } from "react-icons/bs";

type Coach = {
    minuteBalance: ReactNode;
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
        <div className="rounded-xl shadow p-6 bg-[#F8F6FC] w-[310px] flex flex-col">
            <div className="relative">
                <img src={coach.image} alt={coach.name} className="w-20 h-20 rounded-full object-cover" />
                <div className="absolute top-0 left-14 bg-white px-1 py-0.5 flex items-center gap-1 rounded-full text-green-600 text-[10px] font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Available
                </div>
            </div>

            <h2 className="mt-4 text-base font-semibold text-gray-800">{coach.name}</h2>
            <p className="text-xs text-gray-500 mt-1">{coach.expertise.join(" | ")}</p>

            <div className="flex items-center mt-2 text-yellow-500 text-xs">
                <span className="font-medium text-gray-700 mr-1">{coach.rating}</span>
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.round(coach.rating) ? "text-yellow-400" : "text-gray-300"} />
                ))}
                <span className="text-gray-500 ml-2">({coach.reviews})</span>
            </div>

            <hr className="my-2 w-full text-gray-200" />

            <div className="text-xs text-gray-600 w-full">
                <p><span className="font-normal">Call Rate:</span> <span className="font-semibold">{coach.callRate}</span></p>
                <p className="mt-1"><span className="font-normal">Message Rate:</span><span className="font-semibold"> {coach.messageRate}</span></p>
                <p className="mt-1"><span className="font-normal">Minute Balance:</span> <span className="font-semibold">{coach.minuteBalance}</span></p>
            </div>

            <div className="mt-3 flex justify-between items-center w-full gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-2 py-2 shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] bg-[#C8B8E8] text-black font-medium text-xs rounded-md hover:bg-purple-200 transition whitespace-nowrap">
                    <FaRegCalendarAlt /> Book a Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-white border border-[#BBA5E0] text-[#9363C4] text-xs font-medium rounded-md hover:bg-gray-200 transition whitespace-nowrap">
                    <FaPhoneAlt /> Call Now
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-white border border-[#D4D4D8] text-[#454545] text-xs font-medium rounded-md hover:bg-gray-200 transition whitespace-nowrap">
                    <BsChatText className="text-[14px]" /> Chat
                </button>
            </div>
        </div>
    );
}

function FindCoach() {
    const coaches: Coach[] = Array.from({ length: 6 }).map((_, i) => ({
        name: `Coach ${i + 1}`,
        expertise: ["Relationships", "Career", "Anxiety"],
        rating: 4.9,
        reviews: "12K",
        callRate: "$2 / min",
        messageRate: "$6 / 100 word bundle",
        minuteBalance: "2 minutes",
        image: ProfilePicture,
    }));

    return (
        <div className="p-8 bg-[#F1EEF9] min-h-screen">
            <h1 className="p-[30px] md:text-[40px] text-[#454545] font-light capitalize text-center pl-1">
                Find Your Coach
            </h1>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 max-w-[1060px] mx-auto pr-8">
                {coaches.map((coach, idx) => (
                    <Card key={idx} coach={coach} />
                ))}
            </div>

            <div className="flex justify-center pr-8">
                <button className="flex items-center gap-1 my-[40px] px-6 py-3 bg-[#C8B8E8] text-[#454545] text-xs font-semibold rounded-lg shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:bg-purple-200 transition ">
                    View All Coaches
                </button>
            </div>
        </div>
    );
}

export default FindCoach;