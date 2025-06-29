import Ebook from '../assets/book.png';
import { headingH1Nc } from './styles';
import { Icon } from '@iconify/react';

export default function EBook() {
    return (
        <div className='bg-[#F8F6FC] flex flex-col lg:flex-row justify-center items-start gap-[100px] py-[150px]  w-full'>
            <div>
                <h1 className='leading-snug md:text-[40px] text-[#454545] font-light capitalize'>
                    Get Our eBook: <br />"Finding Clarity in Chaos"
                </h1>
                <p className='pt-[10px] md:text-[16px] text-[14px] text-[#333333] font-light leading-8.5 w-[400px]whitespace-nowrap'>
                    Discover practical steps to navigate stress, regain<br /> control, and reconnect with your goals. This short, <br />powerful guide is your first step toward a more <br />focused life.
                </p>
                <h3 className='pt-4 pb-4 text-2xl text-[#9363C4] font-normal leading-10 whitespace-nowrap'>
                    Only $4.99
                </h3>

                <div className="mt-6 -ml-2">
                    <button className="flex items-center gap-2 px-6 py-2 bg-[#C8B8E8] text-black font-medium text-sm shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] rounded-lg capitalize">
                        <Icon icon='solar:calendar-outline' className='text-lg' />
                        purchase and download instantly
                    </button>
                    <p className='text-[13px] text-[#7F7F7F] mt-4'>
                        After payment, you'll be instantly redirected to download your eBook.
                    </p>
                </div>
            </div>

            <div>
                <img src={Ebook} alt="Ebook" className="w-[400px] h-auto" />
            </div>
        </div>
    );
}

