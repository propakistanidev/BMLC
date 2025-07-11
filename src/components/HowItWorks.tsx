import img1 from "../assets/Step1.png";
import img2 from "../assets/step12.png";
import img3 from "../assets/step13.png";
import Arrow from "./Arrow";
import img4 from "../assets/step21.png";
import img5 from "../assets/step22.png";
import img6 from "../assets/step31.png";
import img7 from "../assets/step32.png";
import img8 from "../assets/step33.png";


function HowItWorks() {
    return (
        <section className="py-12 md:py-16 px-4 bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] text-[#454545] font-light capitalize text-center mb-8 md:mb-12">
                How it Works?
            </h2>

            {/* First Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 max-w-7xl mx-auto mb-8 lg:mb-16">
                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-2 lg:gap-4">
                    <img src={img1} alt="Step 1" className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 object-contain" />
                    <img src={img3} alt="Step 3" className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 object-contain" />
                </div>

                <div className="flex justify-center">
                    <img src={img2} alt="Step 2" className="w-40 sm:w-48 lg:w-50 h-48 sm:h-56 lg:h-60 object-contain" />
                </div>

                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl mb-4 capitalize font-light text-[#454545] leading-tight">
                        Explore our Certified Life <br className="hidden sm:block" />coaches
                    </h3>
                    <p className="text-[#454545] leading-relaxed font-light">
                        Browse our list of available life coaches and choose a coach that fits your needs and preferences.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center"> <Arrow /> </div>

            {/* Second Section */}
            <section className="py-12 md:py-20 px-4 bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 max-w-6xl mx-auto mb-8 lg:mb-16">
                    <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <img src={img4} alt="Step 4" className="w-48 sm:w-52 lg:w-60 h-48 sm:h-52 lg:h-60 object-contain" />
                        <img src={img5} alt="Step 5" className="w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 object-contain" />
                    </div>

                    <div className="max-w-md text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl mb-4 capitalize font-light leading-tight">communicate your way</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Talk to your life coach however you feel comfortable — via phone call or text messaging on your time. No contracts, no strings attached. Just real time support at your fingertips.
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex justify-center items-center"> <Arrow /> </div>
            {/* Third Section */}
            <section className="py-12 md:py-20 bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 max-w-6xl mx-auto px-4">
                    <div className="relative flex justify-center">
                        <img src={img8} alt="Step 8" className="w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 object-contain" />
                    </div>

                    <div className="max-w-md text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl mb-4 capitalize font-light leading-tight">
                            Coaching when you <br className="hidden sm:block" />need it
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            You can call or message your life coach at anytime, from anywhere. You also get to schedule coaching sessions when it's convenient for you, and can connect from any mobile device or computer.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HowItWorks;