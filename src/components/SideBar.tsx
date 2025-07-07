import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from '../assets/logo.png'

export default function UserPanelSideBar() {
    const location = useLocation();

    const navItems = [
        { title: 'Home', icon: 'mynaui:home', to: '/UserPanel' },
        { title: 'My Appointments', icon: 'solar:calendar-linear', to: '/' },
        { title: 'Chats', icon: 'fluent:chat-20-regular', to: '/' },
        { title: 'Profile', icon: 'ant-design:setting-outlined', to: '/' },
        { title: 'Expenses', icon: 'solar:card-linear' },
        { title: 'Credit History', icon: 'game-icons:backward-time', to: '/' },
        { title: 'Call History', icon: 'proicons:call', to: '/' },
    ]

    return (
        <div className='min-h-screen w-64 bg-white text-[#27272A] fixed md:relative flex flex-col'>
            {/* Logo */}
            <div className='p-6 flex items-center justify-start '>
                <img src={logo} alt="Logo" className="w-15 h-15 object-contain" />
            </div>


            {/* Navigation */}
            <nav className="flex flex-col space-y-4 p-6 text-[#27272A]">
                {navItems.map((item) => (
                    <Link
                        key={item.title}
                        to={item.to}
                        className={`p-2 rounded-xl hover:bg-[#C8B8E8] flex flex-row gap-2 items-center justify-start transition ${location.pathname === item.to ? 'bg-[#C8B8E8] font-semibold' : ''
                            }`}
                    >
                        <Icon icon={item.icon} className='w-5 h-5 text-2xl' />{item.title}
                    </Link>
                ))}
            </nav>


        </div>
    )
}