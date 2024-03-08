"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import { FaTwitter, FaTelegram } from "react-icons/fa";


export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  // Add refs for other sections as needed

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const nonUserLinks = [
    { label: "About", ref: section1Ref },
    { label: "Origin", ref: section4Ref },
    { label: "Tokenomics", ref: section2Ref },
    { label: "Roadmap", ref: section3Ref },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center font-luckiestGuy ">
      <nav className='fixed w-full z-50 top-0 flex flex-row h-20 space-x-6 px-40 items-center justify-between bg-orange-600 bg-opacity-20 text-white text-[18px] backdrop-blur-lg shadow-md'>
        <img
          src="/images/patweb1.png"
          className='relative cursor-pointer'
          width={70}
          alt='logo'
        />
        <ul className='flex flex-row space-x-6 items-end justify-end px-5'>
          {nonUserLinks && nonUserLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => scrollToSection(link.ref)}
              className='hover:text-yellow-300 cursor-pointer'
            >
              {link.label}
            </a>
          ))}
        </ul>
        <button className="flex items-center justify-center min-w-28 py-2 pt-3 min-px-5 bg-orange-500 hover:bg-orange-600 rounded-full" >Buy now</button>
      </nav>

      {/* ABOUT */}
      <div ref={section1Ref} className="px-40 flex flex-row items-center justify-center  w-full bg-gradient-to-b from-orange-700 to-orange-400 h-screen bg-gradient-dark-to-light-orange">
        <div className="flex flex-col gap-5 items-start justify-center w-1/2">
          <a className="font-bold text-white text-[80px]" >PAT</a>
          <a className="text-xl text-white">This Pat.</a>
          <a className="text-xl text-white">Pat began his career as a meme trader to spread the laughter across the universe.</a>
          <a className="text-xl text-white">Pat made is making 1000x this bull market.</a>
          <div>
          <button className="flex items-center justify-center py-2 pt-3 px-5 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg" >Be a Pat</button>
          </div>
        </div>
        <div className={"w-1/2"} >
          <Image
            src="/images/patweb1.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>

      {/* 2222222 */}
      <div  ref={section4Ref} className="flex flex-row items-center justify-center px-40 bg-gradient-to-b from-orange-700 to-orange-400 h-screen bg-gradient-dark-to-light-orange">
        <div className="w-1/2" >
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-1/2">
          <a className="text-xl text-white">Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes. </a>
          <a className="text-xl text-white">And so, he began his new career as a meme trader, swapping Krabby PEPEs for Dogecoins and spreading laughter across the universe.  He traded doge for pepe, pepes for doge and atlast he accumulated lots for BTC , ETH and SOL with the money he made and became a RICHEST GUY IN TH TOWN</a>
        </div>
      </div>
      {/* 33333 */}
      <div  className="flex flex-row items-center justify-center px-40 bg-gradient-to-b from-orange-700 to-orange-400 h-screen bg-gradient-dark-to-light-orange">
        <div className="flex flex-col gap-5 items-center justify-start w-1/2">
          <a className="text-xl text-white">Just as he was about to give up hope, a blockchain portal shaped like a giant Krabby Patty appeared out of nowhere, engulfing Pat and transporting him to a distant galaxy where memes ruled supreme.</a>
          <a className="text-xl text-white">Surrounded by DOGEs wearing top hats and rare PEPEs doing the Macarena, Pat found himself in a world of blockchain memes, where every transaction was immortalized in the digital ledger with Spongebob's face. Floating in space, Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes.</a>
        </div>
        <div className="w-1/2" >
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* TOKENOMICS */}
      <div
      ref={section2Ref}
        className="flex flex-row items-center justify-center  px-40 bg-gradient-to-b from-orange-700 to-orange-400 h-screen bg-gradient-dark-to-light-orange">
        <div className="w-1/2">
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-1/2">
          <a className="font-bold text-white text-[80px]">Tokenomics</a>
          <a className="text-xl text-white">Total supply: 100000000000</a>
          <a className="text-xl text-white">No Taxes, No Bullshit. It’s that simple.</a>
          <a className="text-xl text-white">LP tokens are burnt, and contract ownership is renounced.</a>

        </div>
      </div>
      {/* ROADMAP */}
      <div
        ref={section3Ref}
        className="w-full flex flex-row items-center justify-center bg-gradient-to-b from-orange-700 to-orange-400 h-screen bg-gradient-dark-to-light-orange">
        <div className="w-1/2">
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center w-1/2">
          <a className="font-bold text-white text-[80px]">Roadmap</a>
          <a className="text-xl text-white">Phase I: 10x</a>
          <a className="text-xl text-white">Phase II: 100x</a>
          <a className="text-xl text-white">Phase III: 1000x</a>
          <a className="text-xl text-white">Phase IV: 100000x</a>
          <a className="text-xl text-white">Phase V: To the moon.</a>
        </div>
      </div>


      <div className="w-full flex items-center justify-center h-20 bg-orange-700">
        <div className="flex flex-row items-center justify-center gap-5">
          <FaTwitter size={30} className="text-orange-400 hover:text-orange-300 cursor-pointer" />
          <FaTelegram size={30} className="text-orange-400 hover:text-orange-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
