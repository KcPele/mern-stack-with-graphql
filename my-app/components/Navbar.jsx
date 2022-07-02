import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div className='bg-gray-50 '>
        <div className='max-w-5xl md:max-w-4xl py-5 my-0 mx-auto flex items-center'>
        <Link href="/">Workout Buddy</Link>
        </div>
        
    </div>
  )
}

export default Navbar