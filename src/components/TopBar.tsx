import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'


const TopBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="header text-[#454545] bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Desktop Header */}
            <div className="hidden lg:flex p-[16px] w-full justify-between items-center gap-[50px] text-base">
                {/* Logo */}
                <img className='pl-4 md:pl-[90px] w-[120px] object-contain' src={logo} alt="logo" />

                {/* Navigation Centered */}
                <nav className="flex-1 flex justify-center">
                    <ul className="flex justify-center space-x-16 px-2 py-2">
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300"><Link to="/" >Home </Link></li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300"><Link to="/About" >About Us</Link></li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300"><Link to="/Pricing">Pricing</Link></li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300"><Link to='/LifeCoaches'>Life Coaches</Link></li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300"><Link to='/Contact'>Contact Us</Link></li>
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

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-4">
                {/* Logo */}
                <img className='w-[100px] object-contain' src={logo} alt="logo" />

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMobileMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                >
                    <span className={`block w-6 h-0.5 bg-[#454545] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#454545] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#454545] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="px-4 py-6">
                    <ul className="flex flex-col space-y-4">
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300 py-2 border-b border-gray-100">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300 py-2 border-b border-gray-100">
                            <Link to="/About" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300 py-2 border-b border-gray-100">
                            <Link to="/Pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300 py-2 border-b border-gray-100">
                            <Link to='/LifeCoaches' onClick={() => setIsMobileMenuOpen(false)}>Life Coaches</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#9363C4] transition-colors duration-300 py-2 border-b border-gray-100">
                            <Link to='/Contact' onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 mt-6">
                        <button className="group flex items-center justify-center gap-2 px-5 py-3 h-[44px] bg-[#F6F6F6] text-[#27272A] rounded-md border-[#D4D4D8] border-[1px] hover:transition-all duration-300">
                            <span><Link to='/SignIn' onClick={() => setIsMobileMenuOpen(false)}>Log In</Link></span>
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                        <button className="group flex items-center justify-center gap-2 px-5 py-3 h-[44px] bg-[#C8B8E8] text-[#27272A] rounded-md hover:transition-all duration-300">
                            <span><Link to='/SignUpPage' onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link></span>
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default TopBar