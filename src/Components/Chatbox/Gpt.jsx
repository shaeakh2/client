import React from 'react'

export default function Gpt(props) {
  return (
    <div className='flex justify-start items-center w-full'>
      <div className="chat chat-start">
          <div className="chat-bubble bg-primary text-white">{props.msg}</div>
      </div>
    </div>

  )
}
