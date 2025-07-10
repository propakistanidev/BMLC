import Ebook from '../assets/book.png';
import { headingH1Nc } from './styles';
import { Icon } from '@iconify/react';

export default function EBook() {
    return (
        <div className='bg-[#F8F6FC] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[100px] py-12 md:py-16 lg:py-[150px] w-full px-4 sm:px-6'>
            <div className='text-center lg:text-left'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-[#454545] font-light capitalize'>
                    Get Our eBook: <br className='hidden sm:inline' />"Finding Clarity in Chaos"
                </h1>
                <p className='pt-4 sm:pt-[10px] sm:text-[16px] text-[14px] text-[#333333] font-light leading-relaxed max-w-md mx-auto lg:mx-0'>
                    Discover practical steps to navigate stress, regain control, and reconnect with your goals. This short, powerful guide is your first step toward a more focused life.
                </p>
                <h3 className='pt-4 pb-4 text-xl sm:text-2xl text-[#9363C4] font-normal'>
                    Only $4.99
                </h3>

                <div className="mt-6">
                    <button className="flex items-center gap-2 mx-auto lg:mx-0 px-6 py-2 bg-[#C8B8E8] text-black font-medium text-sm shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] rounded-lg capitalize">
                        <Icon icon='solar:calendar-outline' className='text-lg' />
                        purchase and download instantly
                    </button>
                    <p className='text-[12px] sm:text-[13px] text-[#7F7F7F] mt-4 max-w-md mx-auto lg:mx-0'>
                        After payment, you'll be instantly redirected to download your eBook.
                    </p>
                </div>
            </div>

            <div className="order-first lg:order-last flex justify-center">
                <img src={Ebook} alt="Ebook" className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto" />
            </div>
        </div>
    );
}

