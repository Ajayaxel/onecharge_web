import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: 'Services', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'How it Works', href: '#' },
        { name: 'Contact', href: '#' },
    ]

    return (
        <header className="h-[8vh] w-full  bg-white border-b border-gray-100 flex items-center sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6 flex items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex items-center">
                        <img src={logo} alt="1CHARGE Logo" className="h-[24px] lg:h-[30px] w-auto object-contain" />
                    </div>
                </div>

                {/* Desktop Nav - 50px from logo */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8 ml-[30px] lg:ml-[50px]">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm lg:text-base font-medium text-black hover:text-gray-600 transition-colors whitespace-nowrap"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-3 lg:gap-6 flex-shrink-0 ml-auto">
                    <a href="#" className="text-sm lg:text-base font-medium text-gray-500 hover:text-black transition-colors whitespace-nowrap">
                        Learn More
                    </a>
                    <button className="bg-black text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                        Download App
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 md:hidden animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-4 gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-gray-600 hover:text-black py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <hr className="border-gray-100" />
                        <a href="#" className="text-base font-medium text-gray-600 py-2">
                            Learn More
                        </a>
                        <button className="bg-black text-white px-6 py-3 rounded-full text-base font-medium w-full">
                            Download App
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
