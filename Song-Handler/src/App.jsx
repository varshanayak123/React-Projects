import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AlbumGrid from './Components/AlbumGrid'

const App = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/f8/e8/17/f8e817b3a5b4c282010d85555a37f554.jpg')" }} >
      <Navbar />
      <Hero />
      <AlbumGrid />
    </div>
  )
}

export default App