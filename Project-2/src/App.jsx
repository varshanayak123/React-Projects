import React from 'react'
import './App.css'
import './index.css'
import Navbar from './assets/Components/Navbar'
import Navbar2 from './Pages/Navbar2'
import Footer from './assets/Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import {Route, Routes} from 'react-router-dom'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Womens from './Pages/Womens'
import Mens from './Pages/Mens'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/Product' element={<Product/>}>
        <Route path='/Product/mens' element={<Mens/>} />
        <Route path='/Product/womens' element={<Womens/>} />
        </Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App