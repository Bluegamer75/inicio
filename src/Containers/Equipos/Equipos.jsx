import React from 'react'
import Minibasket from '../../../img/minibasket.jpg'
import Infantil from '../../../img/infantil.jpg'
import Premini from '../../../img/premini.png'
import Desconocido from '../../../img/desconocido.png'

const Forma = ({Imagen, Nombre, }) => {
  return (
    <div className='flex-equipos-item'>
      <img src={Imagen} alt="Imagen" className='imagen-centro-equipos'/>
      <h1>{Nombre}</h1>
    </div>
  )
}

const Equipos = () => {
  return (
    <div className='flex-equipos'>
      <Forma Imagen={Minibasket} Nombre="Minibasket Saskibaloi Feredu Ermua "/>
      <Forma Imagen={Infantil} Nombre="Infantil Masculino Saskibaloi Feredu Ermua " />
      <Forma Imagen={Premini} Nombre="Premini Saskibaloi Feredu Ermua " />
      <Forma Imagen={Desconocido} Nombre="Infantil Mixto Saskibaloi Feredu Ermua " />

    </div>
  )
}

export default Equipos
