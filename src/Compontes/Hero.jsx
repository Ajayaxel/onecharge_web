import heroBG from '../assets/heroBG.png'

const Hero = () => {
    return (
        <section
            className="relative w-full h-[92vh] flex items-end bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBG})` }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-6 pb-12 md:pb-16 lg:pb-20">
                <div className="max-w-3xl">
                    {/* Main Heading */}
                    <h1 className="text-white font-medium mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[65px] leading-tight">
                        Emergency EV Services
                        <br />
                        At Your Fingertips
                    </h1>

                    {/* Description */}
                    <p className="text-white/90 text-base md:text-lg font-medium mb-8 max-w-xl leading-relaxed">
                        Get instant help for your electric vehicle - from charging assistance to towing, we've got you covered 24/7
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-black px-8 py-3.5 rounded-full text-base font-medium hover:bg-gray-100 transition-colors">
                            Download App
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/10 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
