import React from 'react'

import ImgAbout from '../assets/AboutUsPageImage.png'
import { Icon } from '@iconify/react';
import GroupCoaching from '../components/GroupCoaching';
// import image1 from "../assets/TransformImage1.png";
// import image2 from "../assets/Step12.png";
import TransformImage from "../assets/TransformyourLife.png";

const AboutPage = () => {
    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-20 py-[100px] px-22 w-full bg-[#F8F6FC]'>

                <div>
                    <h1 className="text-4xl md:text-4xl text-[#27272A] font-light capitalize leading-snug whitespace-nowrap p-2 m-2"> Be My Life Coach was created <br />with one simple belief:</h1>
                    <p className='text-2xl font-light p-2 m-2 text-[#27272A] leading-snug'>Getting the support you need shouldn’t be <br /> complicated.</p>
                    <p className='text-1xl font-light p-3 m-2 text-[#454545] leading-7'>Whether you're navigating career chaos, parenting stress, <br />relationship struggles, or simply need someone to talk to, we believe <br />connection shouldn’t be delayed by paperwork, contracts, or long <br /> waitlists. You deserve guidance now—not next week.</p>
                </div>
                <div><img src={ImgAbout} alt="AboutUs1" className="w-[500px] h-[300px] hover:scale-120 transition-transform duration-200 cursor-pointer" /></div>
            </div>
            <div className='flex flex-col items-center py-[100px] px-22 w-full'>
                <h1 className='text-4xl md:text-4xl text-[#27272A] font-light capitalize text-center leading-snug whitespace-nowrap p-2 m-2'>so we built a platform that removes <br />the barriers</h1>
                <div className='flex flex-row justify-center items-center gap-x-16 p-6'>
                    <button className='w-70 h-40 flex flex-col items-center justify-center px-12 py-6 bg-gray-300/25 rounded-2xl border border-white/30 shadow-lg text-black text-center hover:scale-120 transition-transform duration-200 cursor-pointer'><Icon icon='icon-park-outline:form-one' className='text-[#9363C4] text-5xl mb-2' /><span className='whitespace-normal break-words p-2'>No Forms</span></button>

                    <button className='w-70 h-40 flex flex-col items-center justify-center py-6 bg-gray-300/25 rounded-2xl border border-white/30 shadow-lg  text-black text-center hover:scale-120 transition-transform duration-200 cursor-pointer'><Icon icon='flowbite:grid-outline' className='text-[#9363C4] text-5xl font-light mb-2' /><span className='whitespace-normal break-words p-2'>No Fuss</span></button>

                    <button className='w-70 h-40 flex flex-col items-center justify-center py-6 bg-gray-300/25 rounded-2xl border border-white/30 shadow-lg text-black text-center hover:scale-120 transition-transform duration-200 cursor-pointer'>
                        <Icon icon='flowbite:badge-check-outline' className='text-[#9363C4] text-5xl mb-2' />
                        <span className='whitespace-normal'>Just real, instant access <br />to certified life coaches</span>
                    </button>
                </div>

            </div>
            <div className="bg-[#F8F6FC] pt-24 pb-16">
                <div className="flex flex-col lg:flex-row justify-center items-start gap-16 max-w-6xl mx-auto px-4">


                    <div className="flex flex-col gap-6 w-full lg:w-1/2 pl-4 mt-20 lg:pl-[90px]">
                        <h1 className="text-4xl md:text-4xl text-[#333333] font-medium capitalize pb-4 leading-snug">
                            Feeling overwhelmed? <br /> We're just a tap away.
                        </h1>

                        <p className="text-[#454545] font-extralight leading-snug">
                            Connect with a life coach now—no waiting, no judgment.
                        </p>

                        <h1 className='text-3xl md:text-3xl text-[#9363C4] font-extralight capitalize leading-12 italic whitespace-nowrap pb-6'>Because when life feels heavy,<br /> support should feel light.</h1>
                        <button className="group flex items-center gap-2 px-5 h-[50px] w-65 bg-[#C8B8E8] text-[#27272A] font-[13px] rounded-lg shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] hover:transition-all duration-300"><span>Connect with a Life Coach</span> <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span></button>

                    </div>


                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            src={TransformImage}
                            alt="Transform"
                            className="w-full max-w-md rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <GroupCoaching />
        </div >

    )
}
export default AboutPage