import img1 from "../assets/AppDownload.png";
import img2 from "../assets/AppDownButtons.png";


export default function AppDownload() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-24 w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className='text-center lg:text-left lg:mt-8'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-[#454545] font-light capitalize'>
                    Download Be My Life <br className='hidden sm:inline' />Coach App
                </h1>
                <p className="mt-4 sm:mt-8 leading-relaxed font-light text-[#27272A] max-w-md mx-auto lg:mx-0">
                    Download Be My Life Coach app today to get started on a better you for tomorrow
                </p>
                <img src={img2} alt="AppDownload Buttons" className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto mt-6 sm:mt-10 mx-auto lg:mx-0" />
            </div>
            <div className="order-first lg:order-last flex justify-center">
                <img src={img1} alt="AppDownload" className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-auto" />
            </div>
        </div>
    )
}
