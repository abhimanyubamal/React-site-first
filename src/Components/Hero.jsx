import React from 'react'
import Nav from './Nav'

const Hero = () => {
    return (
        <header className='bg-[url(./assets/imgfirst.webp)] h-screen w-full bg-cover bg-no-repeat'>
            <div className='max-w-[1321px] mx-auto'>
                <Nav />
            </div>
        </header>
    )
}

export default Hero
