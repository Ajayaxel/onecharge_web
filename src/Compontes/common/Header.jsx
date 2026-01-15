import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Determine visibility based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
                // Scrolling down -> hide
                setIsVisible(false)
            } else {
                // Scrolling up -> show
                setIsVisible(true)
            }

            setScrolled(currentScrollY > 20)
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Services', href: '#services' },
        { name: 'Features', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Contact', href: '#contact' },
    ]

    const sidebarVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    const backdropVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    }

    return (
        <header className={`h-[8vh] w-full fixed top-0 left-0 z-50 transition-all duration-300 transform 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white border-b border-gray-100'}
        `}>
            <div className="container mx-auto px-4 md:px-6 flex items-center h-full">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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
                            className="text-sm lg:text-base font-medium text-black hover:text-green-600 transition-colors whitespace-nowrap"
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
                    <button className="bg-black text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-2 group">
                        Download App
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-black ml-auto z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={backdropVariants}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-50 md:hidden shadow-2xl flex flex-col"
                        >
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <img src={logo} alt="1CHARGE Logo" className="h-[28px] w-auto" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <X size={20} className="text-gray-800" />
                                </button>
                            </div>

                            {/* Sidebar Content */}
                            <div className="flex flex-col p-6 gap-2 overflow-y-auto flex-grow">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        className="text-lg font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-green-600" />
                                    </motion.a>
                                ))}

                                <div className="my-2 border-t border-gray-100" />

                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{ delay: 0.3 }}
                                    className="text-lg font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Learn More
                                </motion.a>
                            </div>

                            {/* Sidebar Footer */}
                            <div className="p-6 mt-auto border-t border-gray-100 bg-gray-50/50">
                                <button className="w-full bg-black text-white px-6 py-4 rounded-xl text-lg font-medium hover:bg-gray-900 transition-colors shadow-lg shadow-gray-200 flex items-center justify-center gap-2 group">
                                    Download App
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
