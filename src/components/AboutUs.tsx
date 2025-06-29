import img1 from "../assets/AboutUs1.png";


export default function AboutUS() {
    return (
        <div className="flex flex-row justify-center items-start gap-20 py-[150px] px-4 w-full bg-white">
            <div><img src={img1} alt="AboutUs1" className="w-[400px] h-auto" /></div>
            <div className='max-w-[500px] w-full'>
                <h1 className="leading-9 md:text-[40px] text-[#454545] font-light capitalize mt-4 mb-6">About Us</h1>
                <h3 className="text-2xl text-[#27272A] leading-9 font-light">We started Be My Life Coach after seeing <br />close friends burn out from juggling <br />careers, motherhood, and everything in<br /> between.
                </h3>
                <p className="mt-4 text-base text-[[#27272A]] leading-9.5 font-light">Our mission is simple: to make personalized support <br />as easy and accessible as texting a best friend.<br /> Whether you need clarity, encouragement, or a plan <br />forward, we're here to help—right when you need it.</p>
            </div>
        </div>
    )
}

