
import React from 'react'

const NavBar = () => {
    const nonUserLinks = [
        { label: "About", href: "#about" },
        { label: "Tokenomics", href: "#tokenomics" },
        { label: "Roadmap", href: "#roadmap" },
    ]

    return (
        <nav className='fixed w-full z-50 top-0 flex flex-row h-20 space-x-6 px-40 items-center justify-between bg-orange-500 bg-opacity-20 text-white text-[18px] backdrop-blur-lg' >
            {/* <div className='relative w-10 flex items-center justify-center' > */}
            <img
                src="/images/patweb1.png"
                className='relative cursor-pointer'
                width={70}
                alt='logo'
            />
            {/* </div> */}
            <ul className='flex flex-row space-x-6 items-end justify-end px-5' >
                {nonUserLinks && nonUserLinks.map((link, index) =>
                (
                    <a
                        href={link.href}
                        className='hover:text-orange-300'
                    >{link.label}</a>
                ))}
            </ul>
            <button className="min-w-24 h-10  bg-orange-500 hover:bg-orange-400 rounded-full" >Buy now</button>
        </nav>
    )
}

export default NavBar