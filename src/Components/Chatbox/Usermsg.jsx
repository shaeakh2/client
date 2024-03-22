import React from 'react'

export default function Usermsg(props) {
  return (
    <div className='flex justify-end items-center w-full'>
        <div className="chat chat-end ">
            <div className="chat-bubble bg-secondary">{props.msg}</div>
        </div>
        </div>
  )
}
