import bgimg from '../assets/GroupCoachingBG.png'
import { LuPencilLine } from "react-icons/lu";

export default function GroupCoaching() {
    return (
        <div
            className="w-full h-[200px] bg-cover bg-center flex items-center justify-center gap-x-50"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            {/* Left: Heading + Text */}
            <div>
                <h1 className=" pr-8 md:text-[40px] text-[#454545] font-light capitalize">Group Coaching</h1>
                <p className=" font-light leading-6.5 text-sm overflow-hidden">
                    Interested in group coaching for your team, workplace, or event? Fill out the form <br />below, and our team will get in touch with you with more information
                </p>
            </div>

            {/* Right: Centered Button */}
            <div className="flex items-center justify-center">
                <button className="flex items-center gap-2 bg-white text-black-600 px-6 py-3 rounded-lg shadow-lg font-light border-1 border-gray-300 ">
                    <LuPencilLine />
                    Inquire About Group Coaching
                </button>
            </div>
        </div>
    );
}