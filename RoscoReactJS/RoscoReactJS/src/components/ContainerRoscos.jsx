import { useContext, useState, useEffect } from 'react';
import './ContainerRoscos.css'
import Rosco from './Rosco';
import { playersContext } from './Contexts/PlayerContext';

function ContainerRoscos() {
    
    const {players} = useContext(playersContext)
    const [playerOneTurn, setPlayerOneTurn] = useState(true)
    const [playerTwoTurn, setPlayerTwoTurn] = useState(false)

    const handleKeyPress = (e) => {

        if (e.key === "Enter" || e.key === "w") {
            setPlayerOneTurn(!playerOneTurn)
            setPlayerTwoTurn(!playerTwoTurn)
        }
        
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
               
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
        }, [playerOneTurn, playerTwoTurn]);
  
    return (
        <div className='circle'>
            {
                <div>
                    <h2>{players[0].name}</h2>
                </div>
            }
            <div className={playerOneTurn && "some"} ><Rosco turn={playerOneTurn} /></div>
            <div className={playerTwoTurn && "some"} ><Rosco turn={playerTwoTurn} /></div>
            {
                <div>
                    <h2>{players[1].name}</h2>
                </div>
            }
        </div>
    )
}

export default ContainerRoscos;