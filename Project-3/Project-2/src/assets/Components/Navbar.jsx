import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 justify-between px-8 bg-cyan-800 text-white'>
        <h2 className='text-xl font-bold'>Apple</h2>
        <div className='flex gap-8'>
            <Link className='text-lg font-bold' to='/'>Home</Link>
            <Link className='text-lg font-bold' to='/About'>About</Link>
            <Link className='text-lg font-bold' to='/Contact'>Contact</Link>
            <Link className='text-lg font-bold' to='/Product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar