import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import logo from "../assets/BMLCFooterLogo.png";
import appDownloadImg from "../assets/AppDownIconsFooter.png";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-purple-100 py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 text-gray-700">

                {/* Section 1: Logo & Policies */}
                <div className="flex flex-col gap-2 ml-14">
                    <img src={logo} alt="Logo" className="w-32" />
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                </div>

                {/* Section 2: Useful Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-1">Useful Links</h3>
                    <ul>
                        <li className="text-sm hover:underline"><Link to='/'>Home</Link></li>
                        <li className="text-sm hover:underline"><Link to='/Contact'>Contact Us</Link></li>
                        <li className="text-sm hover:underline"><Link to="/LifeCoaches">Life Coaches</Link></li>
                        <li className="text-sm hover:underline"><Link to="/Contact">Become a Life Coach</Link></li></ul>
                </div>


                {/* Section 3: Social Media */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-1">Follow us on Social Media</h3>
                    <div className="flex gap-4 mt-0.5 text-xl text-gray-700">
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTiktok /></a>
                    </div>
                </div>

                {/* Section 4: App Download */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-1">Download the App</h3>
                    <img src={appDownloadImg} alt="Download App" className="w-" />
                </div>
            </div>
        </footer>
    );
}