import LetraRosco from "./LetraRosco";
import { useContext, useEffect, useState } from "react";
import { EstadoLetra, switchWord } from "../Logics/logics";
import { playersContext } from "./Contexts/PlayerContext";

function Rosco({turn}) {

    const arrayLetras = ['A','B','C','D','E','F','G','H','I','J','L','M',
                        'N','Ñ','O','P','Q','R','S','T','U','V','X','Y','Z'];
    
    const [letterArray, setLetterArray] = useState([])

    const {players} = useContext(playersContext)
    
    const handleKeyPress = (e)=> {
       
        if (!turn) {return}
        
        if (e.key === "Enter") {
            setLetterArray(prevArray => {
                return switchWord(prevArray, EstadoLetra.NEUTRO)
            });
        } else if (e.key === "q") {
            setLetterArray(prevArray => {
                return switchWord(prevArray, EstadoLetra.CORRECTA)
            });
        } else if (e.key === "w") {
            setLetterArray(prevArray => {
                return switchWord(prevArray, EstadoLetra.INCORRECTA)
            });
        }

    }

    const startArray = () => {
        const updatedArray = []
        let count = 0
        for (let letter of arrayLetras) {
            const letterObject = {
                index: count,
                letter: letter,
                status: EstadoLetra.NEUTRO,
            }

            updatedArray.push(letterObject)
            count++
        }

        return updatedArray
    }

    useEffect(()=> {
        setLetterArray(()=>startArray())

    }, [])

    useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
               
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
        }, [turn]);

    return (
        <div>
            {
            letterArray.length > 0 &&

                letterArray.map((letter, index) => {
                    
                    return (
                        <LetraRosco key={index} char={letter.letter} status={letter.status} />
                    )
                })
            }
        </div>
    )
}

export default Rosco;