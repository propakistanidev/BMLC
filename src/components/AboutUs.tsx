import img1 from "../assets/AboutUs1.png";
import { headingH1 } from "./styles";

export default function AboutUS() {
    return (
        <div className="flex flex-row justify-center items-start gap-4 py-[150px] px-4 w-full bg-white">
            <div><img src={img1} alt="AboutUs1" className="w-[300px] h-auto" /></div>
            <div className='pl-[90px] max-w-[480px] w-full'><h1 className={headingH1}>About Us</h1>
                <h3 className="mt-4 text-2xl text-gray-700 leading-snug">We started Be My Life Coach after seeing close friends burn out from juggling careers, motherhood, and everything in between.
                </h3>
                <p className="mt-4 text-base text-gray-700 leading-snug">Our mission is simple: to make personalized support as easy and accessible as texting a best friend. Whether you need clarity, encouragement, or a plan forward, we're here to help—right when you need it.</p></div>
        </div>
    )
}

