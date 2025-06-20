import { BsChatText } from "react-icons/bs";
import { SiMinds } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa";
import MagnetLines from "/Users/mazharali/Desktop/TailwindCSS/vite-project/src/blocks/Animations/MagnetLines/MagnetLines.jsx";

const buttons = [
    {
        icon: <BsChatText className="text-[32px] text-[#9363C4] mt-1" />,
        title: "Millions of Meaningful Conversations",
        subtext: "Guiding users through voice and chat sessions.",
    },
    {
        icon: <SiMinds className="text-[32px] text-[#9363C4] mt-1" />,
        title: "Talk to Certified Life Coaches",
        subtext: "Real support at your fingertips with no waiting times.",
    },
    {
        icon: <FaHandHoldingHeart className="text-[32px] text-[#9363C4] mt-1" />,
        title: "Life-Changing Support for Countless Users",
        subtext: "Helping individuals transform their lives every day.",
    },
];

function Content() {
    return (
        <div className="bg-transparent pt-10">

            <div className="flex flex-row justify-center items-start gap-24 py-8 px-4 w-full bg-t mb-20">

                <div className="pl-[20px] max-w-[480px] w-full inset-0">
                    <div className="absolute -z-10 -ml-25 -mt-12">
                        <MagnetLines />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl text-[#333333] font-medium capitalize leading-snug whitespace-nowrap mt-14">
                            <span className="block">Immediate support for</span>
                            <span className="block">life’s pivotal moments</span>
                        </h1>
                        <p className="mt-4 text-base text-gray-700 mr-8 leading-relaxed">
                            Life doesn’t wait for office hours. Whether you’re dealing with relationship stress,
                            burnout, or just feeling stuck, our certified life coaches are here—right now.
                            No paperwork, no shame. Just real-time support, when you need it most.
                        </p></div>
                </div>

                {/* Right: Stacked Buttons */}
                <div className="flex flex-col gap-6">
                    {buttons.map((btn, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-5 bg-gray-100 rounded-full shadow hover:scale-105 transition-transform duration-200 cursor-pointer w-[440px] h-[80px]"
                        >
                            {btn.icon}
                            <div className="flex flex-col justify-center">
                                <div className="text-base font-semibold text-gray-800 leading-snug">
                                    {btn.title}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">{btn.subtext}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Content;