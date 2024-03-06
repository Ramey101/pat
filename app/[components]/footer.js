import React from 'react'
import { FaTwitter, FaTelegram } from "react-icons/fa";


function Footer() {
  return (
    <div className="w-full flex items-center justify-center h-20">
        <div className="flex flex-row items-center justify-center gap-5">
         <FaTwitter  size={30} className="text-orange-400 hover:text-orange-300 cursor-pointer"/>
         <FaTelegram size={30} className="text-orange-400 hover:text-orange-300 cursor-pointer" />
        </div>
    </div>
  )
}

export default Footer