import { Icon } from '@iconify/react';

export default function CoachModal({ isOpen, onClose, coach }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl w-full max-w-md h-[80vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <Icon icon="mdi:close" className="text-2xl" />
                </button>

                {/* Profile Image */}
                <div className="flex justify-center mt-2 mb-4">
                    <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-24 h-24 rounded-full border-4 border-purple-300"
                    />
                </div>

                {/* Coach Info */}
                <h2 className="text-xl font-semibold text-center">{coach.name}</h2>
                <p className="text-center text-gray-500">{coach.expertise}</p>
                <p className="text-center text-sm text-gray-600 mb-4">{coach.availability}</p>

                {/* Action Icons */}
                <div className="flex justify-center gap-6 mb-4 rounded-lg p-4">
                    <a href="tel:+123456789" className="text-purple-600 hover:text-purple-800 border-2 border-gray-200 p-2 rounded-lg">
                        <Icon icon="mdi:phone-outline" className="text-2xl" />
                    </a>
                    <a href="mailto:coach@example.com" className="text-purple-600 hover:text-purple-800 border-2 border-gray-200 p-2 rounded-lg">
                        <Icon icon="mdi:email-outline" className="text-2xl   " />
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-800 border-2 border-gray-200 p-2 rounded-lg">
                        <Icon icon="mdi:calendar-outline" className="text-2xl" />
                    </a>
                </div>

                {/* About Section */}
                <div className="mb-6">
                    <h3 className="text-md font-medium mb-1">About</h3>
                    <p className="text-sm border-2 border-gray-200 rounded-lg p-4 text-gray-600">{coach.about}</p>
                </div>

                {/* Save Button */}
                <button className="bg-[#C8B8E8] text-black py-2 px-6 shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] rounded-lg font-medium  mb-6 mx-auto block">
                    Save Info
                </button>

                {/* Previous Sessions */}
                <div>
                    <h3 className="text-md font-medium mb-2">Previous Sessions</h3>
                    <ul className="text-sm text-gray-600 border-2 border-gray-200 rounded-lg p-4 bg-[#c8b8e865] space-y-1">
                        <li>• Career Roadmap – 15 June</li>
                        <li>• Resume Review – 8 June</li>
                        <li>• LinkedIn Optimization – 1 June</li>
                    </ul>
                    <button className='flex flex-row items-center gap-2 bg-[#C8B8E8] text-black py-2 px-6 shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8] mt-6 rounded-lg font-medium  mb-6 mx-auto'>Done</button>
                </div>
            </div>
        </div>
    );
}