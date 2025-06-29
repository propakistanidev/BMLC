import Graph from "../assets/TransformYourLifeGraph.png";
import Bounce from "../assets/TransformYourLifeBounce.png";
import Control from "../assets/TransformYourLifeControl.png";
import Talk from "../assets/TransdformyourLifeTalk.png";
import TransformImage from "../assets/TransformyourLife.png";

export default function Transform() {
    return (
        <div className="bg-[#E6DFF5] pt-24 pb-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-16 max-w-6xl mx-auto px-4">
                {/* Left Section */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <h1 className="leading-snug md:text-[40px] text-[#454545] font-light capitalize">
                        Transform your life
                    </h1>

                    <p className="text-gray-700 text-base -mt-6 leading-6.5">
                        Helping you live life to the fullest. Each of our Certified Life Coaches encourages and empowers you to build personal skills to manage life’s unexpected ups and downs.
                    </p>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-8">
                        <button className="w-[250px] flex flex-col items-center justify-center text-[#27272A] px-6 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium">
                            <img src={Bounce} alt="Bounce" className="w-20 h-20 mb-4" />
                            able to overcome
                        </button>
                        <button className="w-[250px] flex flex-col items-center justify-center text-[#27272A] px-6 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium">
                            <img src={Control} alt="Control" className="w-20 h-20 mb-4" />
                            able to take control
                        </button>
                        <button className="w-[250px] flex flex-col items-center justify-center text-[#27272A] px-6 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium whitespace-nowrap">
                            <img src={Talk} alt="Talk" className="w-20 h-20 mb-4" />
                            able to manage stress
                        </button>
                        <button className="w-[250px] flex flex-col items-center justify-center text-[#27272A] px-6 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg font-medium">
                            <img src={Graph} alt="Graph" className="w-20 h-20 mb-4" />
                            able to open up
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src={TransformImage}
                        alt="Transform"
                        className="w-full max-w-md rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}