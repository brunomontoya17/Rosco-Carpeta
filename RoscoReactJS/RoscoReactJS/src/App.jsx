import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormPlayers }  from './components/FormPlayers.jsx'
import ContainerRoscos  from './components/ContainerRoscos.jsx'

function App() {

  return (
    <div>
      <h1>Bienvenidos al juego del rosco!!</h1>
      <div className='marco'>
          <ContainerRoscos />
          <FormPlayers />
      </div>
      
    </div>
  )
}

export default App;
