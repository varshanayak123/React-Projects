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
    image: 'https://i.pinimg.com/736x/4a/7e/2c/4a7e2c8cc235d80030af7c48ed7f48b6.jpg'
  },
  {
    name: 'Short n Sweet',
    artist: 'Sabrina Carpenter',
    date: '2024',
    image: 'https://i.pinimg.com/736x/a0/72/8b/a0728b6ff146e2c80cc9f721f3fd15ea.jpg',
    spotifyUrl:'spotifyUrl: '//open.spotify.com/album/5pSk3c3wVwnb2arb6ohCPU''
  },
  {
    name: 'Happier Than Ever',
    artist: 'Billie Eilish',
    date: '2021',
    image: 'https://i.pinimg.com/736x/19/e7/5e/19e75efb97782b0801b1e94af5dd0b7a.jpg'
  },
  {
    name: 'Divide',
    artist: 'Ed Sheeran',
    date: '2017',
    image: 'https://i.pinimg.com/1200x/99/02/8a/99028a7db405798d5ded3973d2b12297.jpg'
  },
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
    image: 'https://i.pinimg.com/736x/4a/7e/2c/4a7e2c8cc235d80030af7c48ed7f48b6.jpg'
  },
  {
    name: 'Short n Sweet',
    artist: 'Sabrina Carpenter',
    date: '2024',
    image: 'https://i.pinimg.com/736x/a0/72/8b/a0728b6ff146e2c80cc9f721f3fd15ea.jpg'
  },
  {
    name: 'Happier Than Ever',
    artist: 'Billie Eilish',
    date: '2021',
    image: 'https://i.pinimg.com/736x/19/e7/5e/19e75efb97782b0801b1e94af5dd0b7a.jpg'
  },
  {
    name: 'Divide',
    artist: 'Ed Sheeran',
    date: '2017',
    image: 'https://i.pinimg.com/1200x/99/02/8a/99028a7db405798d5ded3973d2b12297.jpg'
  }
]

const trending = [
  {
    name: 'GOLDEN',
    artist: 'Jungkook',
    date: '2023',
    image: '/src/Images/Album_1.jpg',
    spotifyUrl: 'spotifyUrl: '//open.spotify.com/album/5pSk3c3wVwnb2arb6ohCPU''
  },
  {
    name: 'Another Album',
    artist: 'Artist Name',
    date: '2024',
    image: '/src/Images/Album_3.jpg'
    
  },
  {
    name: 'Album Name',
    artist: 'Artist Name',
    date: '2025',
    image: '/src/Images/Album_2.jpg'
  },
  {
    name: 'Another Album',
    artist: 'Artist Name',
    date: '2024',
    image: '/src/Images/Album_3.jpg'
  },
  {
    name: 'Album Name',
    artist: 'Artist Name',
    date: '2025',
    image: '/src/Images/Album_2.jpg'
  },
  {
    name: 'Another Album',
    artist: 'Artist Name',
    date: '2024',
    image: '/src/Images/Album_3.jpg'
  },
]
const AlbumGrid = () => {
  return (
    <section className='px-8 py-12'>

      <h2 className='text-3xl font-bold text-white mb-6'>
        🔥 Today's Special
      </h2>

      <div className='flex gap-10 p-5 overflow-x-auto'>

          {albums.map((album) => (
      <div key={album.name} className='min-w-[200px]'>
        <AlbumCard album={album} />
      </div>
     ))}

    </div>

      <h2 className='text-3xl mt-15 font-bold text-white mb-6'>
  ✨ Trending
      </h2>

      <div className='flex gap-10 p-5 overflow-x-auto'>
            {trending.map((album) => (
              <div key={album.name} className='min-w-[200px]'>
          <AlbumCard album={album} />
          </div>
       ))}
       </div>

    </section>
  )
}

export default AlbumGrid