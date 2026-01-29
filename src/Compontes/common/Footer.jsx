import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    const contactInfo = [
        {
            id: 1,
            title: "Get In Touch",
            description: "We're here to help you with all your EV needs"
        },
        {
            id: 2,
            icon: Phone,
            text: "+971 52 7462872"
        },
        {
            id: 3,
            icon: Mail,
            text: "Askme@onecharge.io"
        },
        {
            id: 4,
            icon: MapPin,
            text: "Dubai, United Arab Emirates"
        }
    ];

    return (
        <footer id="contact" className="bg-black text-white m-2 lg:mx-[10px] rounded-lg">
            <div className="max-w-full mx-auto pt-16 pb-6 px-4 md:px-10">
                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {contactInfo.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1C1C1C] rounded-lg py-8 px-6 flex flex-col items-center justify-center text-center hover:bg-[#252525] transition-colors duration-300"
                        >
                            {item.title ? (
                                <>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                                        {item.description}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="mb-4">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-white font-medium">{item.text}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm order-3 md:order-1">
                        © 2026 1Charge. All rights reserved.
                    </div>

                    {/* Logo center */}
                    <div className="order-1 md:order-2">
                        <img
                            src={logo}
                            alt="1Charge"
                            className="h-8 md:h-10 object-contain invert brightness-0 invert-0 grayscale-0 sepia-0 contrast-100" // Ensure white logo if original is black
                            style={{ filter: 'brightness(0) invert(1)' }} // Force white logo
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-white order-2 md:order-3">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
