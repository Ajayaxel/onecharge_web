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
        <section className="w-full bg-white h-screen lg:h-screen flex items-center py-6 md:py-8 lg:py-10">
            <div className="container mx-auto px-4 md:px-6 w-full">



                {/* Grey Container with Carousel */}
                <div className="bg-[#F5F5F5] rounded-lg pl-4 pr-0 md:pl-8 md:pr-0 lg:pl-12 lg:pr-0 py-4 md:py-6 lg:py-12 flex flex-col min-h-[600px] md:min-h-[700px] overflow-hidden" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                    {/* Header aligned with card content */}
                    <div className="mb-8 md:mb-10 lg:mb-12 flex justify-center">
                        <div className="w-full max-w-[1192px] px-1 sm:px-4 md:px-8 lg:px-1">
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-black mb-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={textVariants}
                            >
                                Why Choose 1Charge?
                            </motion.h2>
                            <motion.p
                                className="text-sm sm:text-base md:text-lg text-black font-medium"
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
                    <div className="flex-1 flex items-center ">
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1.1}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                            }}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            loop={true}
                            className="why-choose-swiper w-full "
                        >
                            {features.map((feature) => (
                                <SwiperSlide key={feature.id}>
                                    <div className="flex justify-center h-full">
                                        <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-10 xl:p-12 w-full max-w-[1192px] flex items-center mb-0.5">
                                            <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10 items-center w-full">
                                                {/* Phone Image - First on mobile */}
                                                <div className="flex justify-center mb-2 sm:mb-3 lg:mb-0">
                                                    <div className="w-[140px] h-[210px] xs:w-[160px] xs:h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px] lg:w-[280px] lg:h-[420px] xl:w-[350px] xl:h-[500px]">
                                                        <img
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Text Content - Second on mobile */}
                                                <div className="text-center lg:text-left">
                                                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-black/10 mb-1 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-4">
                                                        {feature.number}
                                                    </div>
                                                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[36px] font-bold text-black mb-1 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-4">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-gray-600 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 leading-relaxed px-2 sm:px-0">
                                                        {feature.description}
                                                    </p>
                                                    <ul className="space-y-0.5 xs:space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2 xl:space-y-3 text-left inline-block">
                                                        {feature.points.map((point, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1 sm:mt-1.5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0"></span>
                                                                <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-gray-700">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
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
