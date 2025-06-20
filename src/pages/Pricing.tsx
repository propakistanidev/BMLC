import React from 'react'
// import TopBar from '../components/TopBar'
import { Icon } from '@iconify/react';
import GroupCoaching from '../components/GroupCoaching';
import AppDownload from '../components/AppDownload';
// import Footer from '../components/Footer';


export const cardProp = 'flex flex-col items-center justify-start py-6  rounded-4xl bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_20%,_white_80%,_#C8B8E866_100%)] shadow-lg w-90 h-100 hover:scale-110 transition-transform duration-200'

//className='flex items-center space-x-2'><Icon icon='mynaui:telephone-call' /> 

const Pricing = () => {
    return (
        <div>
            {/* <TopBar /> */}
            <div className='bg-[#F1EEF9] flex flex-col justify-center items-center pt-8 pb-20' >
                <h1 className='text-4xl md:text-4xl text-[#333333] text-center font-medium capitalize leading-snug whitespace-nowrap p-6 m-4'>How Pricing Works</h1>
                <div className='flex flex-row justify-center items-center gap-20 mt-8'>
                    {/* Card 1 */}
                    <div className={cardProp}>
                        <div className='bg-[#C8B8E8] rounded-full p-2 mb-2'><Icon icon='mdi-light:gift' className='w-12 h-12' /></div>
                        <div><p className='text-[20px]'>Special Offer for New Users</p></div>
                        <hr className='w-70 border-t border-dotted border-gray-400 mt-4 mb-4' />
                        <p className='pr-8 pl-8 leading-snug text-base text-gray-500'>All first-time users receive their first 5 minutes for just $4.99—whether connecting through voice calls or messaging.</p><br />
                        <p className='pr-8 pl-8 leading-snug text-base text-gray-500'>This exclusive offer is available only for new users, giving you the chance to explore our platform with confidence.</p>
                    </div>
                    {/* Card 2 */}
                    <div className={cardProp}>
                        <div className='bg-[#C8B8E8] rounded-full p-2 mb-2'><Icon icon='mynaui:dollar' className='w-12 h-12' /></div>
                        <div> <p className='text-[20px]'>Pricing</p></div>
                        <hr className='w-70 border-t border-dotted border-gray-400 mt-4 mb-4' />
                        <div className=' flex flex-col p-2'> <div className='flex items-center space-x-2 ml-4'>
                            <Icon icon='mynaui:telephone-call' className='flex-row w-7 h-7 text-purple-400' /> <p className=' text-[16px]'>Voice Calls</p>
                        </div>
                            <p className='pl-11 m-2 leading-snug text-base whitespace-wrap text-gray-500'>Each life coach charges per minute. Rates are clearly displayed on profiles.</p></div>

                        <div className=' flex flex-col p-2'> <div className='flex items-center space-x-2 ml-4'>
                            <Icon icon='proicons:chat' className='flex-row w-7 h-7 text-purple-400' /> <p className=' text-[16px]'>Messaging</p>
                        </div>
                            <p className='pl-11 m-2 leading-snug text-base text-gray-500'>This exclusive offer is available only for new users, giving you the chance to explore our platform with confidence.</p></div>
                    </div>

                    {/* Card 3 */}
                    <div className={cardProp}>
                        <div className='bg-[#C8B8E8] rounded-full p-2 mb-2'><Icon icon='solar:card-broken' className='w-12 h-12' /></div>
                        <div><p className='text-[20px]'>Purchasing Credits</p></div>
                        <hr className='w-70 border-t border-dotted border-gray-400 mt-4 mb-4' />
                        <p className='pr-8 pl-8 leading-snug text-base text-gray-500'>To get started, you’ll need to purchase credits before initiating any voice or messaging sessions.</p><br />
                        <p className='pr-8 pl-8 leading-snug text-base text-gray-500'>Each credit equals $1, so for example, 10 credits = $10.</p>
                    </div>
                </div>
                <p className='self-start text-base text-gray-500 pl-18 m-12'>
                    <span className='text-[#9363C4]'>*Note:</span> Messaging for new users: Get 500 words for just <span className='text-[#9363C4] font-bold'>$4.99</span> as part of our new user special.
                </p>
            </div>
            <AppDownload />
            <GroupCoaching />
            {/* <Footer /> */}
        </div>
    )
}

export default Pricing
