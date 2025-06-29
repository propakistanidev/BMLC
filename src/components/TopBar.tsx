// // import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const TopBar = () => {
    return (
        <div className="header text-[#454545] border-b-[1px] border-borderColor p-[16px] w-full flex flex-row bg-white justify-between align-items-center leading-6 items-stretch gap-[50px] mb-0 text-base">
            <img className='pl-[90px]' src={logo} alt="logo"></img>
            <nav>
                <ul className="flex space-x-16 px-2 py-2 ml-12">
                    <li className="cursor-pointer"><Link to="/" >Home </Link></li>

                    <li className="cursor-pointer">
                        <Link to="/About" >About Us</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li className="cursor-pointer"><Link to='/LifeCoaches'>Life Coaches</Link></li>
                    <li className="cursor-pointer"><Link to='/Contact'>Contact Us</Link></li>

                </ul>
            </nav>

            {/* Right Side - Buttons */}
            <div className="flex button-content gap-3 space-x-4 pr-[50px]">
                <button className="group flex items-center gap-2 px-5 py-1 h-[40px] bg-[#F6F6F6] text-[#27272A] rounded-md border-[#D4D4D8]  border-[1px] hover:transition-all duration-300">
                    <span><Link to='/SignIn'>Log In</Link></span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </button>
                <button className="group flex items-center gap-2 px-5 py-1 h-[40px] bg-[#C8B8E8] text-[#27272A] rounded-md  hover:transition-all duration-300"><span><Link to='/SignUpPage'>Sign Up</Link></span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span></button>
            </div>
        </div >
    )
}

export default TopBar
