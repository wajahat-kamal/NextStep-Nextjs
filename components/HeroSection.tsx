import React from 'react'
import bgImage from "@/assets/main-bg-image.jpg"

function HeroSection() {
    return (
        <header className='w-full h-screen bg-cover bg-fixed bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div>
                <h1>Hero Section</h1>
            </div>
        </header>
    )
}

export default HeroSection