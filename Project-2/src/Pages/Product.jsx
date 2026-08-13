import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
    <div className='flex justify-center gap-10 py-4 font-bold mt-5 '>
        <Link to='/Product/mens' >Mens</Link>
        <Link to='/Product/womens' >Womens</Link>
        </div>
    <Outlet/>
    </div>
  )
}

export default Product