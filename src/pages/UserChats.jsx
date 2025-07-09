import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SideBar from "../components/SideBar";
import profileImage from "../assets/profile.png";
import ChatBackground from "../assets/ChatBackground.png";

// Sample Chat Data
const chatList = [
    {
        id: 1,
        name: "Jake Thompson",
        message: "Looking forward to our next session.",
        time: "2:45 PM",
        status: "Online",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        messages: [
            { from: "them", text: "Hi there! I’m excited for our session.", time: "2:41 PM" },
            { from: "me", text: "Same here! Let’s get started soon.", time: "2:42 PM" },
            { from: "them", text: "Don’t forget to bring your notes. 😊", time: "2:43 PM" }
        ]
    },
    {
        id: 2,
        name: "David Lee",
        message: "Can we reschedule?",
        time: "1:30 PM",
        status: "Offline",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        messages: [
            { from: "them", text: "Hey, can we reschedule today’s call?", time: "1:25 PM" },
            { from: "me", text: "Sure, no problem.", time: "1:27 PM" }
        ]
    },
];

export default function UserChats() {
    const [selectedChat, setSelectedChat] = useState(chatList[0]);

    return (
        <div className="flex h-screen bg-[#F8F6FC]">
            <SideBar />

            {/* Main Area */}
            <div className="flex-1 p-6 flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Chats</h1>
                    <div className="flex items-center gap-3">
                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex flex-1 mt-4 overflow-hidden rounded-xl shadow border border-gray-200 bg-white">

                    {/* Chat List Sidebar */}
                    <div className="w-1/3 border-r border-[#DFE4EA] overflow-y-auto px-3 py-2">
                        {/* Inbox + Search */}
                        <div className="mb-3">
                            <h2 className="font-semibold text-gray-800 text-lg mb-2 ml-1">Inbox</h2>
                            <div className="relative w-[85%]">
                                <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                    <Icon icon="ic:round-search" className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search or Start New Chat"
                                    className="w-full pl-10 pr-3 py-2 text-sm rounded-md bg-[#d4d4d867] focus:outline-none focus:ring-2 focus:ring-purple-300"
                                />
                            </div>
                        </div>

                        {/* Chat List */}
                        <div className="space-y-1">
                            {chatList.map((chat) => (
                                <div
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat)}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${selectedChat.id === chat.id ? "bg-[#F1EEF9]" : "hover:bg-purple-50"
                                        }`}
                                >
                                    <img
                                        src={chat.image}
                                        alt={chat.name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-gray-800 font-medium text-sm">{chat.name}</h4>
                                        <p className="text-gray-500 text-xs truncate">{chat.message}</p>
                                    </div>
                                    <div className="text-xs text-gray-400">{chat.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Conversation */}
                    <div className="w-2/3 flex flex-col">
                        {/* Chat Header */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b-2 border-[#dfe4ea79]">
                            <div className="relative">
                                <img src={selectedChat.image} alt="ChatUser" className="h-10 w-10 rounded-full object-cover" />
                                <span
                                    className={`absolute bottom-0 right-0 h-3 w-3 border-2 border-white rounded-full ${selectedChat.status === "Online" ? "bg-green-500" : "bg-gray-400"
                                        }`}
                                />
                            </div>
                            <div>
                                <h4 className="text-gray-800 font-semibold text-sm">{selectedChat.name}</h4>
                                <p className="text-xs text-gray-500">{selectedChat.status}</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div
                            className="flex-1 p-4 space-y-6 overflow-y-auto"
                            style={{
                                backgroundImage: `url(${ChatBackground})`,
                                backgroundColor: "#F7F6FC",
                            }}
                        >
                            {selectedChat.messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col ${msg.from === "me" ? "items-end" : "items-start"}`}
                                >
                                    <div className="relative max-w-xs">
                                        <div
                                            className={`px-4 py-2 text-sm rounded-lg ${msg.from === "me"
                                                ? "bg-white text-[#374151] border border-gray-300 rounded-br-none"
                                                : "bg-[#C8B8E8] text-gray-800 rounded-bl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 mt-1">{msg.time}</span>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t-2 border-[#dfe4ea79] bg-white">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                                />
                                <button className="bg-transparent px-4 py-2 rounded-full text-sm">
                                    <Icon icon="ic:sharp-send" className="text-lg w-10 h-10 text-[#9363C4]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}