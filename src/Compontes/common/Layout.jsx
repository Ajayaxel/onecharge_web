import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white relative">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ChatWidget />
        </div>
    )
}

export default Layout
