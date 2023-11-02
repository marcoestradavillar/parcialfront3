
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    
    if(nombre.length >= 3 && apellido.length >= 6){
      setShow(true)
      setError(false)
    } else{
      setError(true)

    }
  }

  return (
    <div className='App'>
    <h1>Carga de estudiantes</h1>
    {!show &&
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value.trimStart())} />
      <label >Apellido</label>
      <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value.trimStart())}  />
      <button>Enviar</button>
    </form>
    }
    {show &&<Card nombre = {nombre} apellido = {apellido}/>}
    

    {error && <h5 style={{color:'red'}}>Por favor chequea que la información sea correcta</h5>}
  </div>
  )
}

export default App
