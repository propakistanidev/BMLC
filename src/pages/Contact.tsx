import { Icon } from '@iconify/react/dist/iconify.js'
import GroupCoaching from '../components/GroupCoaching'
import { TiMessages } from "react-icons/ti";

// Responsive card prop for Contact page
const contactCardProp = 'flex flex-col items-center justify-start py-4 sm:py-6 px-3 sm:px-4 rounded-2xl bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_20%,_white_80%,_#C8B8E866_100%)] shadow-lg w-full max-w-sm mx-auto h-auto min-h-[300px] sm:min-h-[350px] hover:scale-105 transition-transform duration-200';

const Contact = () => {
    return (
        <div>
            {/* <TopBar /> */}
            <div className="relative bg-[#C8B8E8]/80 h-[280px] sm:h-[320px] md:h-[350px] w-full overflow-hidden backdrop-blur-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#333333] text-center font-medium leading-snug p-2 pt-12 sm:pt-16 md:pt-20 z-10 relative capitalize">
                    get in touch
                </h1>
                <p className='capitalize text-black text-center font-light pt-2 px-4 sm:px-6 md:px-8 z-10 relative text-sm sm:text-base'>We're here to help and answer any questions you might have. <br className="hidden sm:block" />We look forward to hearing from you.</p>

                {/* Concave Arch Shape */}
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        d="M0,320 Q720,200 1440,320 L1440,320 L0,320 Z"
                    />
                </svg>
            </div>
            <div className="relative z-10 -mt-16 sm:-mt-20 md:-mt-24 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-center max-w-7xl mx-auto">
                <div className={contactCardProp}>
                    <Icon icon='ph:headset-bold' className='text-purple-400 font-semibold w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' />
                    <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-center">Contact Support</p>
                    <p className='text-gray-500 pt-3 sm:pt-4 text-xs sm:text-sm md:text-base text-center font-extralight px-2 leading-5 sm:leading-6 flex-grow'>Get help from our support team.</p>
                    <button className="group flex items-center justify-center gap-2 mt-auto mb-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-bold rounded-lg hover:transition-all duration-300 text-xs sm:text-sm md:text-base">
                        <span>Get Support</span> 
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </div>
                <div className={contactCardProp}>
                    <Icon icon='mdi:handshake-outline' className='text-purple-400 font-semibold w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' />
                    <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-center">Partnership</p>
                    <p className='text-gray-500 pt-3 sm:pt-4 text-xs sm:text-sm md:text-base text-center font-extralight px-2 leading-5 sm:leading-6 flex-grow'>Partner with Be My Life Coach or become a Life Coach.</p>
                    <button className="group flex items-center justify-center gap-2 mt-auto mb-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-semibold rounded-lg hover:transition-all duration-300 text-xs sm:text-sm md:text-base">
                        <span>Become a Partner</span> 
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </div>
                <div className={contactCardProp}>
                    <TiMessages className='text-purple-400 font-semibold w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' />
                    <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-center">Feedback</p>
                    <p className='text-gray-500 pt-3 sm:pt-4 text-xs sm:text-sm md:text-base text-center font-extralight px-2 leading-5 sm:leading-6 flex-grow'>Share suggestions about our products or services.</p>
                    <button className="group flex items-center justify-center gap-2 mt-auto mb-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-semibold rounded-lg hover:transition-all duration-300 text-xs sm:text-sm md:text-base">
                        <span>Share Feedback</span> 
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
            <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16'>
                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#27272A] text-center font-medium leading-snug px-4 pb-8 sm:pb-10 md:pb-12 capitalize max-w-4xl mx-auto'>For any other inquiry, please use the form below.
                </h1>

                <form className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-12 md:mb-16 shadow-lg">
                    {/* First & Last Name */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">First Name</label>
                            <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Last Name</label>
                            <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Email Address</label>
                            <input type="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Subject</label>
                            <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base" />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-[#454545] mb-1">Message</label>
                        <textarea rows={5} className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none text-sm sm:text-base" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-row items-center justify-center pt-2">
                        <button
                            type="submit"
                            className="bg-[#C8B8E8] px-4 sm:px-6 py-2 sm:py-3 text-[#27272A] font-bold rounded-lg shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] transition-all hover:bg-purple-200 text-sm sm:text-base"
                        >
                            <span className="flex items-center gap-2">
                                <Icon icon="ion:paper-plane-outline" className="text-lg sm:text-xl" />
                                <span>Submit Request</span>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <GroupCoaching />

        </div>
    )
}

export default Contact

