import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {

  const [userID, setUserID] = useState([])

  const [index, setIndex] = useState(1)

  const [loading, setLoading] = useState(false)

  const datacome = async () =>{

  const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserID(response.data);
    
  }
  useEffect(function(){
    datacome()
  },[index])
    let printUserData = <h3 className='text-gray-400 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 '>Fetching Data....</h3> 
    if(userID.length > 0){
      printUserData = userID.map(function(elem,id){
        return (
          <div  key={id}>
            <Card elem={elem}/>
          </div>
        )
      })
      
    }
  return (
    <div className='bg-black no-scrollbar overflow-auto h-screen p-4 text-white'>
    
    <div className='flex h-[88%] flex-wrap gap-4'>
      {printUserData}

    </div>
    <div className='flex align-center justify-center p-4 gap-5 mt-5'>

    <button 
    style={{opacity :index == 1? 0.5 :1}}
    onClick={() => {
      if(index>1){
        setUserID([])
      setIndex(index-1)
      }
    }}
    className='px-4 py-2 bg-amber-400 rounded-lg active:scale-95 font-bold text-black'>
    Prev
      </button>
      <h4 className='mt-2'>Page-{index}</h4>
    <button 
    onClick={() => {
      setIndex(index+1)
      setUserID([])
    }}
    className='px-4 py-2 bg-amber-400 rounded-lg active:scale-95 font-bold text-black'>
    Next
    </button>

    </div>
    </div>
  )
}

export default App