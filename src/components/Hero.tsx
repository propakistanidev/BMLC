import Background from '../assets/Group 1000009821.png'
import CalendarVector from '../assets/Calendar vector.svg'
import { Icon } from '@iconify/react';


export default function Hero() {
    return (
        <div className="bg-[#F1EEF9] py-8 md:py-12">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-[90px] gap-6 md:gap-8">
                {/* Left: Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#333333] font-medium capitalize leading-snug">
                        Certified life coaches,<br className="hidden sm:block" /> a tap away—because{' '}
                        <br className="hidden sm:block" />you're never alone.
                    </h1>
                    <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#454545] font-light leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                        Whether you're juggling career chaos, parenting stress, or at a crossroads, our life coaches are ready to help you refocus and take your next step now.
                    </p>
                    <div className="mt-6">
                        <button className="group flex items-center text-[13px] sm:text-[14px] font-medium gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#C8B8E8] text-[#27272A] rounded-md shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:transition-all duration-300 hover:shadow-lg mx-auto lg:mx-0">
                            <Icon icon='solar:calendar-outline' className="w-4 h-4 text-[#27272A] font-semibold" />
                            <span>Speak with a Life Coach Now</span>
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center mt-6 lg:mt-0">
                    <img
                        src={Background}
                        alt="Background"
                        className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}