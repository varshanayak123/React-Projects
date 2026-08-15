import React from 'react'

const Card = (props) => {
    
  return (
    <div>
        <a  href={props.elem.url} target='_blank'>
            <div className='h-44 w-70 overflow-auto rounded-xl bg-white'>
          <img className='h-full overflow-hidden w-full object-cover ' src={props.elem.download_url} alt=""  />
          </div>
          <h2 className='font-bold'>{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card