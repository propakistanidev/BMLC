import Ebook from '../assets/book.png'
import { headingH1Nc } from './styles'
import { FaDownload } from "react-icons/fa6";

export default function EBook() {
    return (
        <div className='bg-[#F8F6FC] flex flex-row justify-center items-start gap-[90px] py-[150px] px-4 w-full'>
            <div> <h1 className={headingH1Nc}>Get Our eBook: <br />"Finding Clarity in Chaos"</h1>
                <p className='pt-[10px] md:text-[16px] text-[14px] text-[#333333] font-normal leading-7 w-[400px] space-x-4'>Discover practical steps to navigate stress, regain control, and reconnect with your goals. This short, powerful guide is your first step toward a more focused life.</p>
                <h3 className='pt-2 text-2xl text-[#9363C4] font-normal leading-snug whitespace-nowrap'>Only $4.99</h3>
                <div><button className="mt-8 -ml-2 flex items-center justify-center gap-1 px-9 py-2 bg-[#C8B8E8] m-2 text-black font-semibold text-sm rounded-full pl-12 capitalize border-purple-100 border-[1px]">purchase and download instantly
                </button> <p className='text-[10px] text-gray-500'>After payment, you'll be instantly redirected to download your eBook.</p></div>
                <FaDownload className='text-gray relative -top-12 left-2' /></div>

            <div><img src={Ebook} alt="Ebook" className="w-[300px] h-auto" /></div>
        </div>
    )
}