import { useState, Fragment } from 'react';
import './FormPlayers.css';

export function FormPlayers() {
    return (
        <Fragment>
            <div className='entrada'>
                <form>
                    <table className='inputtable'>
                        <tr>
                            <td><label forHtml='playername1'>Ingrese Nombre del jugador 1:</label></td>
                            <td><input id='playername1' type='text' /></td>
                        </tr>
                        <tr>
                            <td><label forHtml='timeplayer1'>Ingrese Tiempo del jugador 1:</label></td>
                            <td><input id='timeplayer1' type='number' step={1} /></td>
                        </tr>
                        <tr>
                            <td><label forHtml='playername2'>Ingrese Nombre del jugador 2:</label></td>
                            <td><input id='playername2' type='text' /></td>
                        </tr>
                        <tr>
                            <td><label forHtml='timeplayer2'>Ingrese Tiempo del jugador 2:</label></td>
                            <td><input id='timeplayer2' type='number' step={1} /></td>
                        </tr>
                        <tr>
                            <td>Boton</td>
                            <td><input id='CrearJugadores' type='button' value='Ingresar' /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </Fragment>
    )
}

