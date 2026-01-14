import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './WhyChoose.css'
import phoneframe1 from '../assets/phoneframe1.png'

const WhyChoose = () => {
    const features = [
        {
            id: 1,
            number: "01",
            title: "Easy Authentication",
            description: "Quick sign-up with mobile number + OTP or email + password. Optional Google or Apple sign-in for faster access.",
            points: [
                "Mobile number + OTP",
                "Email + Password",
                "Social login options"
            ],
            image: phoneframe1
        },
        {
            id: 2,
            number: "02",
            title: "Real-Time Tracking",
            description: "Track your service provider in real-time. Know exactly when help will arrive with live GPS tracking.",
            points: [
                "Live GPS tracking",
                "Estimated arrival time",
                "Driver contact details"
            ],
            image: phoneframe1
        },
        {
            id: 3,
            number: "03",
            title: "24/7 Support",
            description: "Round-the-clock customer support for any emergency. We're always here when you need us.",
            points: [
                "24/7 availability",
                "Quick response time",
                "Expert assistance"
            ],
            image: phoneframe1
        },
        {
            id: 4,
            number: "04",
            title: "Transparent Pricing",
            description: "No hidden charges. Know the exact cost before confirming your service request.",
            points: [
                "Upfront pricing",
                "Multiple payment options",
                "Digital receipts"
            ],
            image: phoneframe1
        }
    ]

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="w-full bg-white h-auto py-10 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 w-full">



                {/* Grey Container with Carousel */}
                <div className="bg-[#F5F5F5] rounded-lg px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-10 flex flex-col min-h-[400px] md:min-h-[500px] overflow-hidden">
                    {/* Header aligned with card content */}
                    <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center px-4">
                        <div className="w-full max-w-[1192px]">
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 tracking-tight"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={textVariants}
                            >
                                Why Choose 1Charge?
                            </motion.h2>
                            <motion.p
                                className="text-base sm:text-lg text-gray-600 font-medium"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={textVariants}
                                transition={{ delay: 0.2 }}
                            >
                                Everything you need for seamless EV ownership
                            </motion.p>
                        </div>
                    </div>
                    {/* Carousel */}
                    <div className="flex-1 flex items-center justify-center w-full">
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            loop={true}
                            className="why-choose-swiper w-full"
                        >
                            {features.map((feature) => (
                                <SwiperSlide key={feature.id} className="h-full">
                                    <div className="flex justify-center h-full px-4 lg:px-0">
                                        <div className="bg-white rounded-[24px] p-4 md:p-6 lg:p-8 w-full max-w-[850px] flex items-center shadow-sm">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center w-full">

                                                {/* Text Content - Left on Desktop, Bottom on Mobile */}
                                                <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center">
                                                    <div className="text-[40px] sm:text-[60px] lg:text-[80px] leading-none font-bold text-gray-200 mb-2 select-none">
                                                        {feature.number}
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 tracking-tight">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 mb-3 lg:mb-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                                                        {feature.description}
                                                    </p>
                                                    <ul className="space-y-1.5">
                                                        {feature.points.map((point, index) => (
                                                            <li key={index} className="flex items-center lg:items-center justify-center lg:justify-start text-gray-700 text-xs sm:text-sm font-medium">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Phone Image - Right on Desktop, Top on Mobile */}
                                                <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
                                                    <div className="relative w-[120px] xs:w-[140px] sm:w-[160px] lg:w-[180px] xl:w-[200px] aspect-[9/19]">
                                                        {/* Adding a subtle shadow/glow behind the phone if desired, assuming image has transparency */}
                                                        <img
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            className="w-full h-full object-contain drop-shadow-xl"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
