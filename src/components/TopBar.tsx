import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const TopBar = () => {
    return (
        <div className="header text-[#454545] p-[16px] w-full flex flex-wrap md:flex-nowrap bg-white justify-between items-center gap-4 md:gap-[50px] text-base relative">

            {/* Logo */}
            <img className='pl-4 md:pl-[90px] w-[120px] object-contain' src={logo} alt="logo" />

            {/* Navigation Centered */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <ul className="flex flex-wrap justify-center space-x-6 md:space-x-16 px-2 py-2">
                    <li className="cursor-pointer"><Link to="/" >Home </Link></li>
                    <li className="cursor-pointer"><Link to="/About" >About Us</Link></li>
                    <li className="cursor-pointer"><Link to="/Pricing">Pricing</Link></li>
                    <li className="cursor-pointer"><Link to='/LifeCoaches'>Life Coaches</Link></li>
                    <li className="cursor-pointer"><Link to='/Contact'>Contact Us</Link></li>
                </ul>
            </nav>

            {/* Buttons */}
            <div className="flex gap-3 pr-4 md:pr-[50px]">
                <button className="group flex items-center gap-2 px-5 py-1 h-[36px] bg-[#F6F6F6] text-[#27272A] rounded-md border-[#D4D4D8] border-[1px] hover:transition-all duration-300">
                    <span><Link to='/SignIn'>Log In</Link></span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                <button className="group flex items-center gap-2 px-5 py-1 h-[36px] bg-[#C8B8E8] text-[#27272A] rounded-md hover:transition-all duration-300">
                    <span><Link to='/SignUpPage'>Sign Up</Link></span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar