import Graph from "../assets/TransformYourLifeGraph.png";
import Bounce from "../assets/TransformYourLifeBounce.png";
import Control from "../assets/TransformYourLifeControl.png";
import Talk from "../assets/TransdformyourLifeTalk.png";
import TransformImage from "../assets/TransformyourLife.png";

export default function Transform() {
    return (
        <div className="bg-[#E6DFF5] py-12 md:py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-[#454545] font-light capitalize">
                        Transform your life
                    </h1>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Helping you live life to the fullest. Each of our Certified Life Coaches encourages and empowers you to build personal skills to manage life's unexpected ups and downs.
                    </p>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4">
                        <button className="w-full max-w-[280px] mx-auto sm:mx-0 flex flex-col items-center justify-center text-[#27272A] px-4 sm:px-6 py-4 sm:py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium text-sm sm:text-base">
                            <img src={Bounce} alt="Bounce" className="w-16 sm:w-20 h-16 sm:h-20 mb-3 sm:mb-4" />
                            able to overcome
                        </button>
                        <button className="w-full max-w-[280px] mx-auto sm:mx-0 flex flex-col items-center justify-center text-[#27272A] px-4 sm:px-6 py-4 sm:py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium text-sm sm:text-base">
                            <img src={Control} alt="Control" className="w-16 sm:w-20 h-16 sm:h-20 mb-3 sm:mb-4" />
                            able to take control
                        </button>
                        <button className="w-full max-w-[280px] mx-auto sm:mx-0 flex flex-col items-center justify-center text-[#27272A] px-4 sm:px-6 py-4 sm:py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium text-sm sm:text-base">
                            <img src={Talk} alt="Talk" className="w-16 sm:w-20 h-16 sm:h-20 mb-3 sm:mb-4" />
                            able to manage stress
                        </button>
                        <button className="w-full max-w-[280px] mx-auto sm:mx-0 flex flex-col items-center justify-center text-[#27272A] px-4 sm:px-6 py-4 sm:py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium text-sm sm:text-base">
                            <img src={Graph} alt="Graph" className="w-16 sm:w-20 h-16 sm:h-20 mb-3 sm:mb-4" />
                            able to open up
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
                    <img
                        src={TransformImage}
                        alt="Transform"
                        className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-md rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}