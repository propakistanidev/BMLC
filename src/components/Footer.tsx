// import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
// import logo from "../assets/BMLCFooterLogo.png";
// // import appDownloadImg from "../assets/AppDownIconsFooter.png";
// import { Link } from "react-router";
// import AppDownload from "./AppDownloadButtons";
// export default function Footer() {
//     return (
//         <footer className="bg-purple-100 py-12">
//             <div className="max-w-7xl mx-auto px-6 lg:px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 text-gray-700">

//                 {/* Section 1: Logo & Policies */}
//                 <div className="flex flex-col gap-4 ml-14">
//                     <img src={logo} alt="Logo" className="w-32" />
//                     <a href="#" className="text-sm hover:underline">Privacy Policy</a>
//                     <a href="#" className="text-sm hover:underline">Terms of Service</a>
//                 </div>

//                 {/* Section 2: Useful Links */}
//                 <div className="flex flex-col gap-2">
//                     <h3 className="text-lg font-semibold mt-3">Useful Links</h3>
//                     <ul>
//                         <li className="text-sm mb-4.5 hover:underline"><Link to='/'>Home</Link></li>
//                         <li className="text-sm mb-4 hover:underline"><Link to='/Contact'>Contact Us</Link></li>
//                         <li className="text-sm mb-4 hover:underline"><Link to="/LifeCoaches">Life Coaches</Link></li>
//                         <li className="text-sm mb-4 hover:underline"><Link to="/Contact">Become a Life Coach</Link></li></ul>
//                 </div>


//                 {/* Section 3: Social Media */}
//                 <div className="flex flex-col gap-2">
//                     <h3 className="text-lg font-semibold mt-3 mb-2">Follow us on Social Media</h3>
//                     <div className="flex gap-6 mt-0.5 text-xl text-gray-700">
//                         <a href="#"><FaFacebook /></a>
//                         <a href="#"><FaLinkedin /></a>

//                         <a href="#"><FaInstagramSquare /></a>
//                         <a href="#"><FaTiktok /></a>
//                     </div>
//                 </div>

//                 {/* Section 4: App Download */}
//                 <div className="flex flex-col gap-2">
//                     <h3 className="text-lg font-semibold mt-3">Download the App</h3>
//                 </div>
//                 <AppDownload />
//             </div>
//         </footer>
//     );
// }

import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
import logo from "../assets/BMLCFooterLogo.png";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-[#E6DFF5] py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 text-gray-700">

                {/* Section 1: Logo & Policies */}
                <div className="flex flex-col gap-4 ml-14">
                    <img src={logo} alt="Logo" className="w-32" />
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                </div>

                {/* Section 2: Useful Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mt-3">Useful Links</h3>
                    <ul>
                        <li className="text-sm mb-4.5 hover:underline"><Link to='/'>Home</Link></li>
                        <li className="text-sm mb-4 hover:underline"><Link to='/Contact'>Contact Us</Link></li>
                        <li className="text-sm mb-4 hover:underline"><Link to="/LifeCoaches">Life Coaches</Link></li>
                        <li className="text-sm mb-4 hover:underline"><Link to="/Contact">Become a Life Coach</Link></li>
                    </ul>
                </div>

                {/* Section 3: Social Media */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mt-3 mb-2">Follow us on Social Media</h3>
                    <div className="flex gap-6 mt-0.5 text-xl text-gray-700">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaTiktok /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold mt-3">Download the App</h3>
                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* Google Play */}
                        <button className="bg-gray-500 w-[350px] h-[48px] inline-flex items-center border border-gray-400 px-1 rounded-lg hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 512 512">
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                            </svg>
                            <div className="ml-3 flex flex-col justify-center text-left text-white leading-tight">
                                <span className="text-[8px]">GET IT ON</span>
                                <span className="text-sm font-semibold">Google Play</span>
                            </div>
                        </button>

                        {/* App Store */}
                        <button className="bg-gray-500 w-[350px] h-[48px] inline-flex items-center border border-gray-400 px-2 rounded-lg hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 305 305">
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                            </svg>
                            <div className="ml-3 flex flex-col justify-center text-left text-white leading-tight">
                                <span className="text-[8px]">Download on the</span>
                                <span className="text-sm font-semibold">App Store</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    );
}