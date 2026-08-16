import React from 'react'

const AlbumCard = ({ album }) => {
  return (
    <div className='bg-zinc-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300'>

      {/* Album Image */}
      <img
        src={album.image}
        alt={album.name}
        className='w-full aspect-square object-cover'
      />

      {/* Album Details */}
      <div className='p-3'>

        <h2 className='text-white text-base font-bold truncate'>
          {album.name}
        </h2>

        <p className='text-gray-400 text-sm mt-1 truncate'>
          {album.artist}
        </p>

        <p className='text-gray-500 text-xs mt-1'>
          {album.date}
        </p>

        <button className='mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition'>
          🎧 Open in Spotify
        </button>

      </div>

    </div>
  )
}

export default AlbumCard