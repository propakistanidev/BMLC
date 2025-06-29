import Background from '../assets/Group 1000009821.png'
import CalendarVector from '../assets/Calendar vector.svg'
import { Icon } from '@iconify/react';


export default function Hero() {
    return (
        <div className="bg-[#F1EEF9] py-12">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-[90px] gap-8">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h1 className="text-[28px] md:text-[36px] text-[#333333] font-medium capitalize leading-snug">
                        Certified life coaches,<br /> a tap away—because <br />you're never alone.
                    </h1>
                    <p className="mt-4 text-[14px] md:text-[16px] text-[#454545] font-light leading-relaxed">
                        Whether you’re juggling career chaos, parenting <br /> stress, or at a crossroads, our life coaches are ready <br /> to help you refocus and take your next step now.
                    </p>
                    <div className="mt-6">
                        <button className="group flex items-center text-[13px] font-medium gap-2 px-4 py-2 bg-[#C8B8E8] text-[#27272A] rounded-md shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:transition-all duration-300">
                            <Icon icon='solar:calendar-outline' className="w-4 h-4 text-[#27272A] font-semibold" />
                            <span>Speak with a Life Coach Now</span>
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={Background}
                        alt="Background"
                        className="w-full max-w-[600px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}