import img1 from "../assets/AboutUs1.png";


export default function AboutUS() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-20 py-12 md:py-20 lg:py-[150px] px-4 sm:px-6 w-full bg-white">
            <div className="flex justify-center">
                <img src={img1} alt="AboutUs1" className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto" />
            </div>
            <div className='max-w-[500px] w-full text-center lg:text-left'>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-[#454545] font-light capitalize mt-4 mb-6">About Us</h1>
                <h3 className="text-lg sm:text-xl lg:text-2xl text-[#27272A] leading-relaxed font-light">
                    We started Be My Life Coach after seeing close friends burn out from juggling careers, motherhood, and everything in between.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#27272A] leading-relaxed font-light">
                    Our mission is simple: to make personalized support as easy and accessible as texting a best friend. Whether you need clarity, encouragement, or a plan forward, we're here to help—right when you need it.
                </p>
            </div>
        </div>
    )
}

