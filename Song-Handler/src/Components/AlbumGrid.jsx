import React from 'react'
import AlbumCard from './AlbumCard'

const albums = [
  {
    name: 'GOLDEN',
    artist: 'Jungkook',
    date: '2023',
    image: '/src/Images/Album_1.jpg'
  },
  {
    name: 'HIT ME HARD AND SOFT',
    artist: 'Billie Eilish',
    date: '2024',
    image: '/src/Images/Album_2.jpg'
  },
  {
    name: 'Short n Sweet',
    artist: 'Sabrina Carpenter',
    date: '2024',
    image: '/src/Images/Album_3.jpg'
  },
  {
    name: 'Happier Than Ever',
    artist: 'Billie Eilish',
    date: '2021',
    image: '/src/Images/Album_4.jpg'
  },
  {
    name: 'Divide',
    artist: 'Ed Sheeran',
    date: '2017',
    image: '/src/Images/Album_5.jpg'
  }
]

const AlbumGrid = () => {
  return (
    <section className='bg-black px-8 py-12'>

      <h2 className='text-3xl font-bold text-white mb-6'>
        🔥 Today's Special
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>

        {albums.map((album) => (
          <AlbumCard album={album} />
        ))}

      </div>

    </section>
  )
}

export default AlbumGrid