import img1 from "../assets/Step1.png";
import img2 from "../assets/step12.png";
import img3 from "../assets/step13.png";
import Arrow from "./Arrow";
import img4 from "../assets/step21.png";
import img5 from "../assets/step22.png";
import img6 from "../assets/step31.png";
import img7 from "../assets/step32.png";
function HowItWorks() {
    return (
        <section className="py-16 px-4 bg-white text-gray-800">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center mb-16">How it Works?</h2>

            {/* Main layout: Vertically stacked images on left, center image, text on right */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 max-w-7xl mx-auto">

                {/* Left: Step1 and Step13 stacked vertically */}
                <div className="flex flex-col items-center gap-[0.5]">
                    <img src={img1} alt="Step 1" className="w-40 h-40 object-contain" />
                    <img src={img3} alt="Step 3" className="w-40 h-40 object-contain" />
                </div>

                {/* Center: Step12 larger */}
                <div className="flex justify-center">
                    <img src={img2} alt="Step 2" className="w-50 h-60 object-contain" />
                </div>

                {/* Right: Heading and text aligned vertically with step12 */}
                <div className="flex flex-col justify-center text-center lg:text-left max-w-md pl-[40px]">
                    <h3 className="text-2xl mb-4 capitalize">Explore our Certified Life coaches</h3>
                    <p className="text-gray-600">
                        Browse our list of available life coaches and choose a coach that fits your needs and preferences.
                    </p>
                </div>

            </div>
            <Arrow />

            <section className="py-20 px-4 bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto">
                    {/* Images side by side */}
                    <div className="relative flex gap-4">
                        {/* Slightly lower first image */}
                        <img
                            src={img4}
                            alt="Step 4"
                            className="w-60 h-60 object-contain mt-6"
                        />
                        {/* Second image, slightly higher */}
                        <img
                            src={img5}
                            alt="Step 5"
                            className="w-40 h-40 object-contain"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-md text-center lg:text-left ">
                        <h3 className="text-2xl mb-4 capitalize">communicate your way</h3>
                        <p className="text-gray-600">
                            Talk to your life coach however you feel comfortable — via phone call or text messaging on your time. No contracts, no strings attached. Just real time support at your fingertips.
                        </p>
                    </div>
                </div>
            </section>
            <Arrow />
            <section className=" bg-white text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-2 max-w-6xl mx-auto">
                    {/* Images side by side */}
                    <div className="relative flex gap-4">
                        {/* Slightly lower first image */}
                        <img
                            src={img6}
                            alt="Step 4"
                            className="w-50 h-120 object-contain"
                        />
                        {/* Second image, slightly higher */}
                        <img
                            src={img7}
                            alt="Step 5"
                            className="w-50 h-120 object-contain"
                        />
                    </div>

                    {/* Text content */}
                    <div className="max-w-md text-center lg:text-left ml-[50px]">
                        <h3 className="text-2xl mb-4 capitalize">Coaching when you
                            need it</h3>
                        <p className="text-gray-600">
                            You can call or message your life coach at anytime, from anywhere. You also get to schedule coaching sessions when it's convenient for you, and can connect from any mobile device or computer.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HowItWorks;