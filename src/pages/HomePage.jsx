import React from 'react'
import Hero from '../Compontes/homepage/Hero'
import Services from '../Compontes/homepage/Services'
import WhyChoose from '../Compontes/homepage/WhyChoose'
import HowItWorks from '../Compontes/homepage/HowItWorks'

const HomePage = () => {
    return (
        <div className=''>
            <Hero />
            <Services />
            <WhyChoose />
            <HowItWorks />
        </div>
    )
}

export default HomePage;