import React, { useState } from 'react'
import './Form.css'
import Message from './Message';
import Error from './Error';
const Form = () => {
  const [name, setName]=useState("");
  const [color, setColor]=useState("");
  const [flag, setFlag] = useState(null);
  const colorRegex = /^#(?:[0-9a-fA-F]{6}){1}$/g;
  
  const nameCheck = () => {
    return name.trim().length >= 3 ? true : false;
  }
  const colorCheck = () => {
    return color.match(colorRegex) ? true : false;
  }
  const checkField = () => { 
    return nameCheck() && colorCheck();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(checkField()) ;
  }
    
  return (
    <div >
        <form onSubmit={handleSubmit} className='wrapper'>
            <input 
                placeholder='Ingresa tu nombre'
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" />
            <input 
                placeholder='Ingresa tu color favorito (formato HEX)'
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                type="text" />
            <button onClick={handleSubmit} >ENVIAR</button>
        </form>
        {flag != null  ?  flag ? <Message name={name} color={color}/> : <Error/> : null}
    </div>
  )
}

export default Form