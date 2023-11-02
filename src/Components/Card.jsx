import React from 'react'

const Card = ({nombre, apellido}) => {
  return (
    <div>
      <h3>Hola {nombre} {apellido}</h3>
      <h4>Te has registrado correctamente !</h4>

    </div>
  )
}

export default Card