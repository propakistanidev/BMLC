import SideBar from "../components/SideBar";
import { Icon } from "@iconify/react";
import profileImage from "../assets/profile.png";
import CoachCard from "../components/CoachCard";

const coaches = [
    {
        name: "Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        expertise: "Mindfulness & Mental Health",
        rating: 4,
        calls: 12,
        messages: 34,
        minutes: 48,
        online: true,
        reviews: '23K'
    },
    {
        name: "David Lee",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        expertise: "Life Strategy & Productivity",
        rating: 5,
        calls: 20,
        messages: 50,
        minutes: 80,
        online: true,
        reviews: '2K'
    },
    {
        name: "Maria Smith",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        expertise: "Relationships & Self-esteem",
        rating: 3,
        calls: 7,
        messages: 22,
        minutes: 35,
        online: true,
        reviews: '3K'
    },
    {
        name: "James Patel",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        expertise: "Career Guidance",
        rating: 4.4,
        calls: 18,
        messages: 40,
        minutes: 60,
        online: true,
        reviews: '2.3K'
    },
    {
        name: "Robert Downey",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        expertise: "Spiritual Wellness",
        rating: 5,
        calls: 25,
        messages: 60,
        minutes: 90,
        online: true,
        reviews: '3.4K'
    },
    {
        name: "Liam Brown",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        expertise: "Confidence | Public Speaking",
        rating: 4.8,
        calls: 15,
        messages: 28,
        minutes: 42,
        online: false,
        reviews: '5K'
    },

];

const UserPanel = () => {
    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Home</h1>

                    <div className="flex items-center gap-3">
                        <button
                            className="text-[#3C3C3C] font-light px-4 py-2 rounded flex items-center gap-2 border border-gray-200"

                        >
                            <Icon icon="prime:wallet" className="text-2xl" />
                            Wallet Balance:{" "}
                            <span className="text-[#9363C4] font-medium">$20</span>
                        </button>

                        <img
                            src={profileImage}
                            alt="User profile image"
                            className="h-9 w-9 rounded-full"
                        />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Life Coach Section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold ml-8">Meet Your Life Coach</h1>
                        <div className="flex ">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white px-6 py-1 rounded-l-lg border border-gray-200"
                            />
                            <Icon
                                icon="mdi:magnify"
                                className="text-4xl text-black px-2 bg-[#C8B8E8] rounded-r-lg"
                            />
                        </div>
                    </div>

                    {/* Coach Cards Grid */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        {coaches.map((coach, index) => (
                            <div key={index} className="w-full sm:w-[48%] lg:w-[32%]">
                                <CoachCard coach={coach} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;