import React from 'react'
import './app.css'

/*Importacion de los contenedores con cada parte de la pagina web*/

import Navbar from './Containers/Navbar/Navbar.jsx'
import Header from './Containers/Header/Header.jsx'
import Principal from './Containers/Principal/Principal.jsx'
import Footer from './Containers/Footer/Footer'
import Equipos from './Containers/Equipos/Equipos'
import Patrocinadores from './Containers/Patrocinadores/Patrocinadores'

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Principal />
        <Equipos />
        <Patrocinadores />
        <Footer />
       
    </>
  )
}

export default App
