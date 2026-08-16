import React from 'react'


const Navbar = () => {
  return (
   <div className='fixed top-3 left-8 right-8 z-50 flex py-2.5 px-7 justify-between items-center bg-red-700/90 backdrop-blur-md text-white rounded-xl shadow-lg'>
      <div className='flex items-center gap-3'>
        <img className='h-12 w-12 rounded-full object-cover' src="/src/Images/Music-Logo.jpg" alt="" />
        <span>Mae</span>
      </div>
        <div className='flex gap-8 items-center'>
            <a href='#' className='text-lg font-bold hover:text-yellow-200 transition'>Home</a>
            <a href='#' className='text-lg font-bold hover:text-yellow-200 transition'>About</a>
            <a href='#' className='text-lg font-bold hover:text-yellow-200 transition'>Favorite</a>
          <div className="h-9 w-9 rounded-full bg-zinc-700"></div>

        </div>
    </div>
  )
}

export default Navbar