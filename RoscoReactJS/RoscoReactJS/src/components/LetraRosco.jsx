import { useState } from "react"
import { EstadoLetra } from "../Logics/logics";
import "./LetraRosco.css"

function LetraRosco({char, status, x, y}) {

    return (
        
        <div className={status} >
            {char}        
        </div>
        
    )
}

export default LetraRosco