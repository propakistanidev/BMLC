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
        <section className="py-16 px-4 bg-white text-gray-800">
            <h2 className="p-[30px] md:text-[40px] text-[#454545] font-light capitalize text-center pl-1">
                How it Works?
            </h2>

            {/* First Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-[0.5]">
                    <img src={img1} alt="Step 1" className="w-40 h-40 object-contain" />
                    <img src={img3} alt="Step 3" className="w-40 h-40 object-contain" />
                </div>

                <div className="flex justify-center">
                    <img src={img2} alt="Step 2" className="w-50 h-60 object-contain" />
                </div>


                <div className="max-w-md text-center lg:text-left ml-30">
                    <h3 className="text-2xl mb-4 capitalize font-light text-[#454545] leading-7.5">
                        Explore our Certified Life <br />coaches
                    </h3>
                    <p className="text-[#454545] leading-6.5 font-light">
                        Browse our list of available life coaches and <br />choose a coach that fits your needs and <br />preferences.
                    </p>
                </div>
            </div>
            <div className="pl-20"> <Arrow /> </div>

            {/* Second Section */}
            <section className="py-20 px-4 bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
                    <div className="relative flex gap-4">
                        <img src={img4} alt="Step 4" className="w-60 h-60 object-contain mt-6" />
                        <img src={img5} alt="Step 5" className="w-40 h-40 object-contain" />
                    </div>


                    <div className="max-w-md text-center lg:text-left ml-20">
                        <h3 className="text-2xl mb-4 capitalize font-light leading-7.5">communicate your way</h3>
                        <p className="text-gray-600 leading-6.5 font-light">
                            Talk to your life coach however you feel <br />comfortable — via phone call or text <br />messaging on your time. No contracts, no <br />strings attached. Just real time support at <br />your fingertips.
                        </p>
                    </div>
                </div>
            </section>
            <div className="pl-20"> <Arrow /> </div>

            {/* Third Section */}
            <section className="bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-2 max-w-6xl mx-auto">
                    <div className="relative flex gap-4">
                        {/* <img src={img6} alt="Step 6" className="w-50 h-120 object-contain" />
                        <img src={img7} alt="Step 7" className="w-50 h-120 object-contain" /> */}
                        <img src={img8} alt="Step 8" className="w-120 h-120 object-contain -ml-6" />
                    </div>


                    <div className="max-w-md text-center lg:text-left ml-30">
                        <h3 className="text-2xl mb-4 capitalize font-light leading-7.5">
                            Coaching when you <br />need it
                        </h3>
                        <p className="text-gray-600 leading-6.5 font-light">
                            You can call or message your life coach at<br /> anytime, from anywhere. You also get to <br />schedule coaching sessions when it's <br />convenient for you, and can connect from any <br />mobile device or computer.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HowItWorks;