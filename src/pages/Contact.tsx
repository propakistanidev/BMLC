import { cardProp } from './Pricing'
import { Icon } from '@iconify/react/dist/iconify.js'
import GroupCoaching from '../components/GroupCoaching'
import { TiMessages } from "react-icons/ti";

const Contact = () => {
    return (
        <div>
            {/* <TopBar /> */}
            <div className="relative bg-[#C8B8E8]/80 h-[350px] w-full overflow-hidden backdrop-blur-3xl">
                <h1 className="text-4xl md:text-4xl text-[#333333] text-center font-medium leading-snug whitespace-nowrap p-2 pt-20 z-10 relative capitalize">
                    get in touch
                </h1>
                <p className='capitalize text-black text-center font-light pt-2 z-10 relative'>We’re here to help and answer any questions you might have. <br />We look forward to hearing from you.</p>

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
            <div className="relative z-10 -mt-25  px-6 md:px-20 flex flex-col md:flex-row gap-10 justify-center">
                <div className={cardProp}>
                    <Icon icon='ph:headset-bold' className='text-purple-400 font-semibold w-20 h-20' />
                    <p className="font-semibold text-2xl mt-2 ">Contact Support</p>
                    <p className='text-gray-500 pt-6 text-lg text-center font-extralight -mb-8 leading-8'>Get help from our support <br />team.</p>
                    <button className="group flex items-center gap-2 m-8 mt-20 px-18 py-6 h-[40px] bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-bold rounded-lg border-black-100 hover:transition-all duration-300"><span>Get Support</span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span></button>
                </div>
                <div className={cardProp}>
                    <Icon icon='mdi:handshake-outline' className='text-purple-400 font-semibold w-20 h-20' />
                    <p className="font-semibold text-2xl mt-2">Partnership</p>
                    <p className='text-gray-500 pt-6 pr-6 pl-6 text-lg text-center font-extralight -mb-8 leading-8 '>Partner with Be My Life Coach <br />or become a Life Coach.</p>
                    <button className="group flex items-center gap-2 m-8 mt-20 px-10 py-6 h-[40px] capitalize bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-semibold rounded-lg border-black-100 hover:transition-all duration-300"><span>become a partner</span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span></button>
                </div>
                <div className={cardProp}>
                    <TiMessages className='text-purple-400 font-semibold w-20 h-20' />
                    <p className="font-semibold text-2xl mt-2">Feedback</p>
                    <p className='text-gray-500 pt-6 pr-8 pl-6 text-lg font-extralight text-center -mb-8 leading-8 '>Share suggestions about our<br /> products or services.</p>
                    <button className="group flex items-center gap-2 m-8 mt-20 px-10 py-6 h-[40px] capitalize bg-[#C8B8E8] text-[#27272A] shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] font-semibold rounded-lg  border-black-100 hover:transition-all duration-300"><span>Share Feedback</span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span></button>
                </div>
            </div>
            <div className='m-8'>
                <h1 className='text-4xl md:text-4xl text-[#27272A] text-center font-medium leading-snug whitespace-nowrap p-2 pt-35 pb-10 capitalize'>For any other inquiry, please use the form below.
                </h1>

                <form className="max-w-3xl mx-auto bg-white p-10 rounded-2xl space-y-6 mb-30">
                    {/* First & Last Name */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">First Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Last Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Email Address</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-[#454545] mb-1">Subject</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-row items-center justify-center">
                        <button
                            type="submit"
                            className="bg-[#C8B8E8] px-3 h-13 text-[#27272A] font-bold py-2 rounded-lg shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] transition-all"
                        >
                            <span className="flex items-center gap-2">
                                <Icon icon="ion:paper-plane-outline" className="text-2xl mt-1" />
                                <span className='mt-1'>Submit Request</span>
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

