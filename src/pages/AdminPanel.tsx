// import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';
import logo from '../assets/logo.png';
import coach1 from '../assets/coach1.png';
import client1 from '../assets/client1.png';
import CoachModal from '../Modal/CoachModal';
import { useState } from 'react';

export default function AdminPanel() {
    const [collapsed, setCollapsed] = useState(false);
    const [filter, setFilter] = useState('busy');
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const reviews = [
        {
            name: 'Haroon Rashid',
            image: client1,
            rating: 5,
            time: '2 min ago',
            text: 'This platform is amazing! I was able to connect with a coach who helped me make real progress.',
        },
        {
            name: 'Mehwish Rani',
            image: client1,
            rating: 4,
            time: '1 hour ago',
            text: 'Good experience overall. Would definitely use again.',
        },
        {
            name: 'Abdul Rehman',
            image: client1,
            rating: 5,
            time: 'Yesterday',
            text: 'Loved the insights from my session. Very helpful!',
        },
        {
            name: 'Shaheer Khalid',
            image: client1,
            rating: 3,
            time: '3 days ago',
            text: 'Session was okay, but could’ve been more structured.',
        },
    ];

    const navTabs = [
        { label: 'Home', icon: 'mynaui:home', to: '/AdminPanel' },
        { label: 'My Sessions', icon: 'solar:calendar-linear', to: '/sessions' },
        { label: 'Chats', icon: 'fluent:chat-20-regular', to: '/chats' },
        { label: 'Earnings', icon: 'ant-design:dollar-outlined', to: '/earnings' },
        { label: 'Availability', icon: 'tdesign:calendar-2', to: '/availability' },
        { label: 'Profile', icon: 'ant-design:setting-outlined', to: '/profile' },
        { label: 'Call History', icon: 'solar:phone-linear', to: '/calls' },
    ];

    const sessions = [
        {
            id: 1,
            name: 'Mazhar Ali',
            expertise: 'Career Coach',
            time: '21 June | 2:00 PM - 3:00 PM',
            about: 'Mazhar has 10+ years of experience helping individuals make career transitions with confidence.',
            image: coach1,
        },
        {
            id: 2,
            name: 'Ayesha Khan',
            expertise: 'Life Coach',
            time: '22 June | 11:00 AM - 12:00 PM',
            about: 'Ayesha focuses on helping people unlock their personal potential.',
            image: coach1,
        },
        {
            id: 3,
            name: 'Samiullah Niazi',
            expertise: 'Health Coach',
            time: '23 June | 4:00 PM - 5:00 PM',
            about: 'Samiullah specializes in mental and physical well-being coaching.',
            image: coach1,
        },
        {
            id: 4,
            name: 'Rabia Noor',
            expertise: 'Confidence Coach',
            time: '24 June | 10:00 AM - 11:00 AM',
            about: 'Rabia helps people regain confidence in personal and professional life.',
            image: coach1,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <div className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${collapsed ? 'w-20' : 'w-full md:w-60'} fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0 md:flex md:flex-col`}>
                <div>
                    <div className={`flex ${collapsed ? 'flex-row md:flex-col items-center gap-2 md:gap-4' : 'items-center justify-between'}`}>
                        <img src={logo} alt="Logo" className="h-8" />
                        <button onClick={() => setCollapsed(!collapsed)}>
                            <Icon icon="mdi:menu" className="text-purple-700 text-2xl" />
                        </button>
                    </div>
                    <nav className="mt-6 md:mt-10 space-y-4 hidden md:block">
                        {navTabs.map((tab, idx) => (
                            <Link
                                key={idx}
                                to={tab.to}
                                className="flex items-center gap-4 cursor-pointer hover:text-gray-700 hover:bg-[#C8B8E8] hover:font-semibold hover:rounded-lg py-2 px-2"
                            >
                                <Icon icon={tab.icon} className="text-xl" />
                                {!collapsed && <span>{tab.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="hidden md:block mt-10">
                    <button
                        className={`flex items-center border-1 text-red-500 border-red-500 cursor-pointer rounded-lg py-2 gap-2 text-lg  ${collapsed ? 'justify-center px-2' : 'px-12'}`}
                        onClick={() => window.location.href = '/'}
                    >
                        <Icon icon="mdi:logout" className="text-xl font-bold" />
                        {!collapsed && 'Logout'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 mt-[60px] md:mt-0 p-4 md:p-6 overflow-y-auto bg-[#F8F6FC]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <h1 className="text-3xl mt-4 text-[#27272A] font-bold">Home</h1>
                    <div className="flex items-center gap-3">
                        <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@bmlc.com</div>
                        </div>
                    </div>
                </div>


                {/* Upcoming Sessions */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
                        <button className="text-purple-600 text-sm">See All</button>
                    </div>
                    <div className="flex gap-4 md:gap-8 overflow-x-auto pb-5">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className="min-w-[320px] bg-[#c8b8e88f] p-4 rounded-xl shadow-xl cursor-pointer hover:shadow-md transition-all relative"
                                onClick={() => {
                                    setSelectedCoach({
                                        name: session.name,
                                        expertise: session.expertise,
                                        availability: session.time,
                                        about: session.about,
                                        image: session.image
                                    });
                                    setModalOpen(true);
                                }}
                            >
                                {/* Top Right Dots */}
                                <div className="absolute top-3 right-3 text-xl text-gray-600">
                                    <Icon icon="mi:options-vertical" />
                                </div>

                                {/* Coach Info Row */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={session.image} className="h-12 w-12 rounded-full" alt="Coach" />
                                    <div>
                                        <h3 className="font-medium text-base">{session.name}</h3>
                                        <p className="text-sm text-gray-700">{session.expertise}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="border-t border-gray-400 my-2" />

                                {/* Time Info */}
                                <div className="flex items-center gap-6 text-sm text-gray-700 mt-4 pl-4">
                                    <div className="flex items-center gap-2">
                                        <Icon icon="mdi:calendar-blank-outline" className="text-lg" />
                                        <span>{session.time.split('|')[0].trim()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon icon="mdi:clock-outline" className="text-lg" />
                                        <span>{session.time.split('|')[1]?.trim()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Earnings Overview */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-4">
                        <h2 className="text-lg font-semibold">Earnings Overview - Last Month</h2>
                        <div className="flex items-center gap-6 text-sm">
                            <label className="flex items-center gap-1 cursor-pointer">
                                <p className='pr-4 font-medium text-sm text-gray-500'>Filter</p>
                                <input type="radio" name="filter" checked={filter === 'busy'} onChange={() => setFilter('busy')} />
                                Most Busy
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="radio" name="filter" checked={filter === 'rated'} onChange={() => setFilter('rated')} />
                                Top Rated
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { label: 'Total Earnings', value: '$4,200', icon: 'icon-park-outline:dollar', bg: 'bg-[#E0F6ED]', color: 'text-[#2ABD7B]' },
                            { label: 'Your Earnings', value: '$1,500', icon: 'hugeicons:save-money-dollar', bg: 'bg-[#E0F2FF]', color: 'text-[#36A8FC]' },
                            { label: 'Rating', value: '4.8', icon: 'solar:star-linear', bg: 'bg-[#FFF1E0]', color: 'text-[#FF9F33]' },
                            { label: 'Sessions', value: '32', icon: 'hugeicons:doctor-01', bg: 'bg-[#E7EBF9]', color: 'text-[#5A79D5]' },
                            { label: 'Bill Hours', value: '48', icon: 'iconoir:wallet', bg: 'bg-[#F1ECF8]', color: 'text-[#8C68C8]' },
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl text-center shadow-2xl">
                                <div className={`w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center ${card.bg}`}>
                                    <Icon icon={card.icon} className={`text-2xl ${card.color}`} />
                                </div>
                                <div className="text-sm text-gray-500">{card.label}</div>
                                <div className="text-xl font-semibold">{card.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* My Reviews */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold">My Reviews</h2>
                        <button className="text-purple-600 text-sm">See All</button>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-lg relative">
                                <div className="flex items-center gap-3">
                                    <img src={review.image} className="h-10 w-10 rounded-full" alt="Client" />
                                    <div>
                                        <div className="font-medium">{review.name}</div>
                                        <div className="flex text-yellow-400 text-sm">
                                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 text-xs text-gray-400">{review.time}</div>
                                </div>
                                <p className="text-sm text-gray-600 mt-3">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && selectedCoach && (
                <CoachModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    coach={selectedCoach}
                />
            )}
        </div>
    );
}