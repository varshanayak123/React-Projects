import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black pt-28 py-20 px-5 text-center'>

      <h1 className='text-5xl font-bold text-white'>
        Find Your Favorite Music
      </h1>

      <p className='mt-4 text-gray-600 text-lg'>
        Search for your favorite artists and discover their albums
      </p>

      <div className='mt-8 flex justify-center'>
        <div className='flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden border border-gray-200'>

          <input
            type='text'
            placeholder='Search for an artist...'
            className='flex-1 px-6 py-4 outline-none text-gray-700'
          />

          <button className='px-7 py-4 bg-red-700 text-white font-semibold border-none hover:bg-red-800 transition'>
            Search
          </button>

        </div>
      </div>

    </div>
  )
}

export default Hero