import React from 'react'
import Feredu from '../../../img/feredu.jpeg'
import Ermua from  '../../../img/ermua-kirolak.webp'

const Patrocinadores = () => {
  return (
    <div>
     <br /> <br /> <h1 style={{ textAlign: 'center' }}>Estos son los patrocinadores del club</h1>
     <div className='Patrocinadores'>
        <img src={Feredu} alt="" />
        <img src={Ermua} alt="" />
     </div>
    </div>
  )
}

export default Patrocinadores
