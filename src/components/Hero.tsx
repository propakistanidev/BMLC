import Background from '../assets/Group 1000009821.png'
import CalendarVector from '../assets/Calendar vector.svg'


export default function Hero() {
    return (
        <div className=" bg-[#F1EEF9]">
            <div className='flex justify-between pt-[50px] pb-[50px]'>
                <div>
                    <div>
                        <h1 className="pl-[90px] md:text-[36px] text-[#333333] text-lightBlack font-medium capitalize">Certified life coaches,<br /> a tap away—because <br />you're never alone.</h1>
                    </div>
                    <div>
                        <p className='pt-[10px] pl-[90px] md:text-[16px] text-[14px] text-[#333333] font-normal'>Whether you’re juggling career chaos, parenting <br /> stress, or at a crossroads, our life coaches are ready <br /> to help you refocus and take your next step now.</p>
                    </div>
                    <div className="pt-[10px] pl-[90px]">
                        <button className="group flex items-center gap-2 px-4 py-2 bg-[#C8B8E8] text-[#333333] rounded-full border-black-100 border-[1px] hover:transition-all duration-300">
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                <img src={CalendarVector} alt="CalendarVector" className='w-4 h-4'></img>
                            </span>
                            <span>Speak with a Life Coach Now</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='pr-[90px] max-w max-h object-cover transition-transform duration-300 ease-in-out hover:scale-110'><img src={Background} alt="Background" className='w-160 h-80'></img>
                    </div>

                </div>
            </div>

        </div>
    )
}