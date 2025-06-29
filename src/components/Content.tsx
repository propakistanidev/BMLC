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
        <div className="bg-transparent pt-10">

            <div className="flex flex-row justify-center items-start gap-40 py-10 px-4 pr-20 w-full bg-t mb-20">

                <div className="pl-[20px] max-w-[480px] w-full inset-0">
                    <div className="absolute -z-10 -ml-25 -mt-12">

                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl text-[#454545] font-light capitalize leading-12 whitespace-nowrap mt-14">
                            <span className="block">Immediate support for</span>
                            <span className="block">life’s pivotal moments</span>
                        </h1>
                        <p className="mt-4 text-base text-[#27272A] mr-8 font-light leading-relaxed">
                            Life doesn’t wait for office hours. Whether you’re dealing with relationship stress,
                            burnout, or just feeling stuck, our certified life coaches are here—right now.
                            No paperwork, no shame. Just real-time support, when you need it most.
                        </p></div>
                </div>

                {/* Right: Stacked Buttons */}
                <div className="flex flex-col gap-8">
                    {buttons.map((btn, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-5  bg-gray-100/60 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer w-[440px] h-[100px]"
                        >
                            {btn.icon}
                            <div className="flex flex-col justify-center">
                                <div className="text-base font-medium text-[#454545] leading-snug">
                                    {btn.title}
                                </div>
                                <div className="text-sm text-[#7F7F7F] mt-1">{btn.subtext}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Content;