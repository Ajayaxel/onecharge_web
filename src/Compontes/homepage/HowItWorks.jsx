import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

import phoneFrame from '../../assets/howitworks/DSFFEWF.png'
import how1 from '../../assets/howitworks/how1.jpeg'
import how2 from '../../assets/howitworks/how2.jpeg'
import how3 from '../../assets/howitworks/how3.jpeg'
import how4 from '../../assets/howitworks/how4.jpeg'
import how5 from '../../assets/howitworks/how5.jpeg'
import iphone from '../../assets/iphone.jpg'

const HowItWorks = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const containerRef = useRef(null)
    const images = [how1, how2, how3, how4, how5]

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = Math.min(Math.floor(latest * images.length), images.length - 1)
        setCurrentStep(step)
    })

    const handleNext = () => {
        if (containerRef.current) {
            const containerHeight = containerRef.current.offsetHeight - window.innerHeight // usable scroll distance
            const stepHeight = containerHeight / (images.length - 1)
            // If on last step, go back to 0, otherwise go to next
            const nextStep = currentStep === images.length - 1 ? 0 : currentStep + 1
            const targetScroll = containerRef.current.offsetTop + (nextStep * stepHeight)

            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            })
        }
    }

    const handleBack = () => {
        if (containerRef.current) {
            const containerHeight = containerRef.current.offsetHeight - window.innerHeight
            const stepHeight = containerHeight / (images.length - 1)
            const prevStep = Math.max(currentStep - 1, 0)
            const targetScroll = containerRef.current.offsetTop + (prevStep * stepHeight)

            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            })
        }
    }

    const stepContents = [
        {
            title: "Sign Up",
            subtitle: "Create your account"
        },
        {
            title: "Add Vehicle",
            subtitle: "Add Your Vehicle"
        },
        {
            title: "Report Your Issue",
            subtitle: "Select from predefined issue categories or describe your problem with photos/videos"
        },
        {
            title: "Share Location",
            subtitle: "Allow GPS access or manually pin your location on the map"
        },
        {
            title: "Get Help Fast",
            subtitle: "Receive instant service ticket confirmation and track your service provider in real-time"
        }
    ]

    return (
        <React.Fragment>
            <div id="how-it-works" ref={containerRef} className="relative h-[1500vh] bg-black m-2 lg:m-[10px] rounded-lg">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
                    <div className="container mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            >
                                How It Works
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-gray-400 text-lg md:text-xl font-light"
                            >
                                Get help in just a few simple steps
                            </motion.p>
                        </div>

                        {/* Content Grid */}
                        <div className="relative w-full mx-auto flex flex-col lg:block items-center justify-center min-h-0 lg:min-h-[600px]">

                            {/* Left Side Content - Positioned absolutely left or flex start */}
                            <div className="hidden lg:flex absolute left-2 lg:left-8 top-[35%] -translate-y-1/2 flex-col items-end text-right z-30">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="h-[100px] min-w-[300px] flex flex-col items-end"
                                    >
                                        <h3 className="text-white text-3xl lg:text-4xl font-bold mb-2">{stepContents[currentStep].title}</h3>
                                        <p className="text-gray-400 text-lg max-w-xs">{stepContents[currentStep].subtitle}</p>
                                    </motion.div>
                                </AnimatePresence>

                            </div>

                            {/* Left Arrow - Connecting to center */}
                            <motion.svg
                                initial={{ opacity: 0, pathLength: 0 }}
                                whileInView={{ opacity: 1, pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute hidden lg:block top-1/2 left-[22%] lg:left-[25%] -translate-y-[20%] w-40 h-40 pointer-events-none text-white z-10"
                                viewBox="0 0 100 100"
                                fill="none"
                            >
                                <path
                                    d="M10,10 C10,50 50,50 80,80"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="4,4"
                                    markerEnd="url(#arrowhead)"
                                />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                    </marker>
                                </defs>
                            </motion.svg>


                            {/* Center Phone - Absolute Center */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative lg:absolute left-0 lg:left-1/2 bottom-auto lg:bottom-0 transform translate-x-0 lg:-translate-x-1/2 z-20 flex justify-center items-end mt-12 md:mt-20 mb-8 lg:mt-0 lg:mb-0"
                            >
                                <div className="relative w-[200px] sm:w-[250px] md:w-[280px] lg:w-[400px] flex justify-center items-center">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full transform scale-90"></div>

                                    <img
                                        src={phoneFrame}
                                        alt="OneCharge Phone Frame"
                                        className="relative w-full h-auto z-20 pointer-events-none drop-shadow-2xl"
                                    />

                                    {/* Dynamic Screen Content - Overlay */}
                                    <div className="absolute top-[4%] left-[22%] w-[45%] h-[67%] z-30 overflow-hidden rounded-[15px] sm:rounded-[20px] md:rounded-[25px] flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentStep}
                                                src={images[currentStep]}
                                                alt={`Step ${currentStep + 1}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full object-cover"
                                            />
                                        </AnimatePresence>
                                    </div>


                                </div>
                            </motion.div>

                            {/* Right Side Content - Positioned absolutely right */}
                            <div className="hidden lg:flex absolute right-8 lg:right-32 top-1/2 -translate-y-1/2 flex-col items-start text-left z-30">
                                {/* Right Arrow */}
                                <motion.svg
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    whileInView={{ opacity: 1, pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute top-20 -left-36 w-40 h-40 pointer-events-none text-white z-10"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                >
                                    <path
                                        d="M80,10 C80,60 40,30 10,70"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeDasharray="4,4"
                                        markerEnd="url(#arrowhead)"
                                    />
                                </motion.svg>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative z-20"
                                >
                                    <div className="flex items-center gap-6 mb-4">
                                        {currentStep > 0 && (
                                            <button
                                                onClick={handleBack}
                                                className="text-white font-medium text-base hover:text-gray-300 transition-colors"
                                            >
                                                Back
                                            </button>
                                        )}
                                        <button
                                            onClick={handleNext}
                                            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                        >
                                            {currentStep === 0 ? 'START' : currentStep === images.length - 1 ? 'FINISH' : 'NEXT'}
                                        </button>
                                    </div>
                                    <p className="text-gray-400 text-lg max-w-[180px]">
                                        Click here to see how it works
                                    </p>
                                </motion.div>
                            </div>

                            {/* Mobile Only View */}
                            <div className="flex lg:hidden flex-col w-full relative z-30 px-4 pb-20">
                                <div className="flex flex-col items-center text-center gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col items-center min-h-[100px]"
                                        >
                                            <h3 className="text-white text-2xl font-bold mb-2">{stepContents[currentStep].title}</h3>
                                            <p className="text-gray-400 max-w-xs">{stepContents[currentStep].subtitle}</p>
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-6 mb-3">
                                            {currentStep > 0 && (
                                                <button
                                                    onClick={handleBack}
                                                    className="text-white font-medium text-base hover:text-gray-300 transition-colors"
                                                >
                                                    Back
                                                </button>
                                            )}
                                            <button
                                                onClick={handleNext}
                                                className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                            >
                                                {currentStep === 0 ? 'START' : currentStep === images.length - 1 ? 'FINISH' : 'NEXT'}
                                            </button>
                                        </div>
                                        <p className="text-gray-400">Click here to see how it works</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className='m-2 lg:m-[10px] rounded-lg overflow-hidden'>
                <div className="w-full  justify-center">
                    <img
                        src={iphone}
                        alt="iPhone Showcase"
                        className="w-full max-h-screen object-cover"
                    />
                </div>
            </section>
        </React.Fragment>
    )
}

export default HowItWorks

