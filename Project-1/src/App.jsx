import React, { useState } from 'react'
import './index.css'

const App = () => {

  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title , detail})
    setTask(copyTask)

    setTitle("")
    setDetail("")
    
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  return (
    <div className='min-h-screen lg:flex bg-linear-to-br from-slate-900 via-black to-slate-800 text-white'>

      <form onSubmit={(e) =>{
        submithandler(e)
      }} className='flex flex-col gap-5 lg:w-1/2 p-10 justify-center'>

        <h1 className='text-4xl font-bold tracking-wide'>Add Notes</h1>

      <input type="text" placeholder='Enter Note heading' 
        className='w-full px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          
        }}
        />

      <textarea type="text" placeholder='Write Details' 
        className='w-full h-40 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all duration-300'
        value={detail}
        onChange={(e) => {
          setDetail(e.target.value);
          
        }}
        /> 
      <button className='w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 duration-200 font-semibold text-lg shadow-lg shadow-blue-600/30'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l border-zinc-700 p-10'>

      <h1 className='text-4xl font-bold mb-6'>Recent Notes</h1>

        <div className='flex flex-wrap gap-6 overflow-y-auto h-[85%] pr-2'>
          {task.map(function(elem , idx ){

            return (
  <div
    key={idx}
    className='flex items-start justify-between flex-col w-48 h-60 rounded-2xl bg-white text-black p-5 relative overflow-hidden'
  >

    {/* Decorative circle */}
    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-200 opacity-60"></div>

    <div className='relative z-10 overflow-y-auto hide-scrollbar'>
      <h3 className='text-xl font-bold wrap-break-words'>
        {elem.title}
      </h3>

      <p className='mt-3 h-28 overflow-y-auto wrap-break-words text-gray-700'>
        {elem.detail}
      </p>
    </div>

    <button
      onClick={() => deleteNote(idx)}
      className='relative z-10 w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold'
    >
      Delete
    </button>

  </div>
)
          })}
          </div>
      </div>
    </div>
  )
}

export default App