
import React from 'react';

const ChatWidget = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[999] group cursor-pointer">
            <div className="relative">
                {/* Subtle glow/pulse effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>

                {/* Button Container */}
                <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl border border-gray-100 transform transition-all duration-300 group-hover:scale-110 overflow-hidden">
                    <img
                        src="/bot.svg"
                        alt="AI Assistant"
                        className="w-full h-full object-contain p-3.5 animate-twist"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatWidget;
