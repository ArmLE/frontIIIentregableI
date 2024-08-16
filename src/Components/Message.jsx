import React from 'react'
import './Message.css'
function Message({name,color}) {
  return (
    <div className='success'>
        <span>Hola {name}</span>
        <span>Sabemos que tu color favorito es:</span>
        <button>{color}</button>
    </div>
  )
}

export default Message