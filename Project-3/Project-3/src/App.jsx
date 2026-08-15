import React from 'react'

const App = () => {
    const getData = () =>{
        console.log("aa gaya data woww!!");
        
    }
  return (
    <div className='h-screen p-4 bg-black text-white'>
        <button className='bg-pink-600 px-5 mb-3 py-2 rounded ' onClick={getData}>GetData</button>
    </div>
  )
}

export default App