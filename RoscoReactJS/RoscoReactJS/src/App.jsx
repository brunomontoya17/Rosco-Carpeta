import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormPlayers }  from './components/FormPlayers.jsx'
import ContainerRoscos  from './components/ContainerRoscos.jsx'
import Rosco from './components/Rosco.jsx'
import PlayersContextProvider from './components/Contexts/PlayerContext.jsx'

function App() {

  const [showRosco, setShowRosco] = useState(false)

  return (
    <PlayersContextProvider>
      <div>
        <div className='marco'>
            <h1>Bienvenidos al juego del rosco!!</h1>
            {
              showRosco ?
                <ContainerRoscos />
                :
                <FormPlayers showRosco={setShowRosco}/>
            }
            
        </div>
      </div>
    </PlayersContextProvider>
  )
}

export default App;
