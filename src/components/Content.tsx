import { BsChatText } from "react-icons/bs";
import Heads from '../assets/Head.svg';
import { Icon } from '@iconify/react'

const buttons = [
    {
        icon: <BsChatText className="text-[32px] text-[#9363C4] mt-1" />,
        title: "Millions of Meaningful Conversations",
        subtext: "Guiding users through voice and chat sessions.",
    },
    {
        icon: <img src={Heads} alt="Support" className="text-[32px] text-[#9363C4] mt-1" />,
        title: "Talk to Certified Life Coaches",
        subtext: "Real support at your fingertips with no waiting times.",
    },
    {
        icon: <Icon icon='ph:hand-heart' className="text-[32px] text-[#9363C4] mt-2" />,
        title: "Life-Changing Support for Countless Users",
        subtext: "Helping individuals transform their lives every day.",
    },
];

function Content() {
    return (
        <div className="bg-transparent pt-6 md:pt-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[90px]">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 xl:gap-20 py-8 lg:py-10 mb-12 lg:mb-20">
                    {/* Left: Text Content */}
                    <div className="flex-1 max-w-[500px] text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#454545] font-light capitalize leading-tight">
                            <span className="block">Immediate support for</span>
                            <span className="block">life's pivotal moments</span>
                        </h1>
                        <p className="mt-4 text-[14px] sm:text-base text-[#27272A] font-light leading-relaxed">
                            Life doesn't wait for office hours. Whether you're dealing with relationship stress,
                            burnout, or just feeling stuck, our certified life coaches are here—right now.
                            No paperwork, no shame. Just real-time support, when you need it most.
                        </p>
                    </div>

                    {/* Right: Stacked Buttons */}
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
                        {buttons.map((btn, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-100/60 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer w-full max-w-[440px] mx-auto lg:mx-0 min-h-[90px] sm:min-h-[100px]"
                            >
                                <div className="flex-shrink-0">
                                    {btn.icon}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-sm sm:text-base font-medium text-[#454545] leading-snug">
                                        {btn.title}
                                    </div>
                                    <div className="text-xs sm:text-sm text-[#7F7F7F] mt-1">{btn.subtext}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;