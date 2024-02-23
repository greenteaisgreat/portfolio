import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <AiOutlineMenu
                onClick={handleNav}
                className="absolute right-4 top-4 z-[99] md:hidden"
            />
            {nav ? (
                <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90">
                    <a href="#main">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Sidenav
