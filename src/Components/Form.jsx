import React, { useState } from 'react'
import './Form.css'
import Message from './Message';
import Error from './Error';
const Form = () => {
  const [name, setName]=useState("");
  const [color, setColor]=useState("");
  const [flag, setFlag] = useState(null);
  const colorRegex = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');

  const checkField = () => { 
    return name.length != 0 && color.length != 0 && colorRegex.test(color) ? true : false;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(checkField) ;
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