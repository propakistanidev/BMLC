

import image1 from "../assets/TransformImage1.png";
import image2 from "../assets/Step12.png";
import { FaBrain, FaUserShield, FaHeartbeat, FaCommentDots } from "react-icons/fa";

export default function Transform() {
    return (
        <div className="bg-purple-100 pt-24 pb-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-16 max-w-6xl mx-auto px-4">


                <div className="flex flex-col gap-6 w-full lg:w-1/2 pl-4 lg:pl-[90px]">
                    <h1 className="text-3xl md:text-4xl text-[#333333] font-medium capitalize">
                        Transform your life
                    </h1>

                    <p className="text-gray-700 text-base">
                        Helping you live life to the fullest. Each of our Certified Life Coaches encourages and empowers you to build personal skills to manage life’s unexpected ups and downs.
                    </p>


                    <div className="grid grid-cols-2 gap-4 ">
                        <button className="flex flex-col items-center justify-center text-purple-400 px-4 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-full border border-white/30 p-5 shadow-lg max-w-[300px] font-semibold">
                            <FaBrain className="text-2xl mb-2 text-purple-500" />
                            able to overcome
                        </button>
                        <button className="flex flex-col items-center justify-center text-purple-400 px-4 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-full border border-white/30 p-5 shadow-lg max-w-[300px] font-semibold">
                            <FaUserShield className="text-2xl mb-2 text-purple-500" />
                            able to take control
                        </button>
                        <button className="flex flex-col items-center justify-center text-purple-400 px-4 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-full border border-white/30 p-5 shadow-lg max-w-[300px] font-semibold">
                            <FaHeartbeat className="text-2xl mb-2 text-purple-500" />
                            able to manage stress
                        </button>
                        <button className="flex flex-col items-center justify-center text-purple-400 px-4 py-6 capitalize text-center bg-white/80 backdrop-blur-md rounded-full border border-white/30 p-5 shadow-lg max-w-[300px] font-semibold">
                            <FaCommentDots className="text-2xl mb-2 text-purple-500" />
                            able to open up
                        </button>
                    </div>
                </div>

                {/* Right Section: Two images touching edge to edge */}
                <div className="flex w-full lg:w-1/2 items-start">
                    {/* Image 1 lower */}
                    <div className="mt-16 w-1/2">
                        <img
                            src={image1}
                            alt="Transform 1"
                            className="w-[300px] h-auto rounded-l-full object-cover"
                        />
                    </div>

                    {/* Image 2 higher */}
                    <div className="-mt-4 w-1/2">
                        <img
                            src={image2}
                            alt="Transform 2"
                            className="w-[600px] h-auto rounded-r-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}