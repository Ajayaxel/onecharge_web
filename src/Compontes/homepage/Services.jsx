import { motion } from 'framer-motion'
import serviceimg1 from '../../assets/serviceimg1.png'
import serviceimg2 from '../../assets/serviceimg2.png'
import serviceimg3 from '../../assets/serviceimg3.png'
import serviceimg4 from '../../assets/serviceimg4.png'

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Booster Charging",
            description: (
                <>
                    Emergency charging assistance to get you back
                    <br />
                    on the road quickly
                </>
            ),
            image: serviceimg1,
            darkBg: true
        },
        {
            id: 2,
            title: "Towing",
            description: (
                <>
                    Professional towing service for your EV when it
                    <br />
                    needs professional care
                </>
            ),
            image: serviceimg2,
            darkBg: false
        },
        {
            id: 3,
            title: "EV Minor Service",
            description: (
                <>
                    Quick fixes and minor repairs for your electric
                    <br />
                    vehicle
                </>
            ),
            image: serviceimg3,
            darkBg: false
        },
        {
            id: 4,
            title: "Battery Jump Start",
            description: (
                <>
                    12V battery jump start service to get your EV
                    <br />
                    running again
                </>
            ),
            image: serviceimg4,
            darkBg: true
        }
    ]

    // Animation variants for scroll animations
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    }

    return (
        <section id="services" className="bg-white rounded-lg">

            <div className="bg-[#F5F5F5] rounded-lg text-center m-2 lg:m-[10px]  py-32 ">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-black mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Comprehensive EV support when you need it most
                </motion.p>
            </div>

            {/* Services Grid */}
            < div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 m-2 lg:m-[10px]" >
                {
                    services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`rounded-lg overflow-hidden ${service.darkBg ? 'bg-black' : 'bg-[#F5F5F5]'
                                } p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[450px] lg:min-h-[500px]`}
                        >
                            {/* Text Content */}
                            <motion.div
                                className="mb-6 text-center mt-20"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={containerVariants}
                            >
                                <motion.h3
                                    className={`text-3xl md:text-4xl lg:text-[42px] font-medium mb-4 ${service.darkBg ? 'text-white' : 'text-black'}`}
                                    variants={textVariants}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    className={`text-base font-medium ${service.darkBg ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                                    variants={textVariants}
                                >
                                    {service.description}
                                </motion.p>
                            </motion.div>

                            {/* Image */}
                            <div className="flex items-end justify-center mt-auto">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-auto object-contain max-h-[250px] md:max-h-[300px]"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

        </section >
    )
}

export default Services
