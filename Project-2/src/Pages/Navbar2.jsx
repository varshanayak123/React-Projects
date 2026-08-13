import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()
  return (
    <div className=' py-4  px-8 bg-cyan-700 text-white'>
        <button onClick={() => {
            navigate('/')
            
        }} className='px-5 py-2 bg-amber-400 rounded m-2 cursor-pointer active:scale-95'>Back to Home Page</button>

        <button onClick={() => {
            navigate(+1)

        }} className='px-5 py-2 bg-amber-400 rounded m-2 cursor-pointer active:scale-95'>Next</button>
        <button onClick={() => {
            navigate(-1)

        }} className='px-5 py-2 bg-amber-400 rounded m-2 cursor-pointer active:scale-95'>Back</button>
    </div>
  )
}

export default Navbar2