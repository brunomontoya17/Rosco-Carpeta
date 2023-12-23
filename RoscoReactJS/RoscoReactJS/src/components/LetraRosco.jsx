import { useState } from "react"
import { EstadoLetra } from "../Logics/logics";
import "./LetraRosco.css"

function LetraRosco({key,char,index,posX,posY,listaLetras}) {
    const [classletra,setClassletra] = useState(EstadoLetra.NEUTRO);

    listaLetras[index]=setClassletra;
    return (
        <span key={key} className={classletra} style={{position:'relative', top:posX, left:posY}}>
            {char}
            
        </span>
    )
}

export default LetraRosco