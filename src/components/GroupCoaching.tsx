import bgimg from '../assets/GroupCoachingBG.png'
import { LuPencilLine } from "react-icons/lu";

export default function GroupCoaching() {
    return (
        <div
            className="w-full min-h-[200px] sm:h-[200px] bg-cover bg-center flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-x-12 lg:gap-x-50 px-4 sm:px-6 py-8 sm:py-0"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            {/* Left: Heading + Text */}
            <div className="text-center sm:text-left max-w-md sm:max-w-none">
                <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-[#454545] font-light capitalize mb-3 sm:mb-2">
                    Group Coaching
                </h1>
                <p className="font-light leading-relaxed text-xs sm:text-sm">
                    Interested in group coaching for your team, workplace, or event? Fill out the form below, and our team will get in touch with you with more information
                </p>
            </div>

            {/* Right: Centered Button */}
            <div className="flex items-center justify-center flex-shrink-0">
                <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-light border border-gray-300 text-sm sm:text-base whitespace-nowrap">
                    <LuPencilLine />
                    <span className="hidden sm:inline">Inquire About Group Coaching</span>
                    <span className="sm:hidden">Group Coaching</span>
                </button>
            </div>
        </div>
    );
}
