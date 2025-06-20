import bgimg from '../assets/GroupCoachingBG.png'
import { LuPencilLine } from "react-icons/lu";

export default function GroupCoaching() {
    return (
        <div
            className="w-full h-[300px] bg-cover bg-center flex items-center justify-center gap-x-35 px-16"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            {/* Left: Heading + Text */}
            <div className="max-w-lg text-black">
                <h1 className="text-4xl mb-4">Group Coaching</h1>
                <p className=" font-light leading-snug overflow-hidden">
                    Interested in group coaching for your team, workplace, or event? Fill out the form below, and our team will get in touch with you with more information
                </p>
            </div>

            {/* Right: Centered Button */}
            <div className="flex items-center justify-center -mr-10">
                <button className="flex items-center gap-2 bg-white text-black-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-purple-400 hover:text-white transition">
                    <LuPencilLine />
                    Inquire About Group Coaching
                </button>
            </div>
        </div>
    );
}