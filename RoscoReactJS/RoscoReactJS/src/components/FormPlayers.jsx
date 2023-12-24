import { useState, Fragment, useContext } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import './FormPlayers.css';
import { playersContext } from './Contexts/PlayerContext';

export function FormPlayers({showRosco}) {

    const { setPlayers } = useContext(playersContext)

    const [dataPlayerOne, setDataOne] = useState({})
    const [dataPlayerTwo, setDataTwo] = useState({})

    const handleButton = () => {
      showRosco(true);
      setPlayers([dataPlayerOne, dataPlayerTwo])
    }

    return (
            <Form>
              <div style={{display:"flex", gap:20}}>
                <Form.Item label="Jugador 1">
                <Input placeholder="Nombre" onChange={(e)=> setDataOne({...dataPlayerOne,name: e.target.value})}/>
                </Form.Item>
                <Form.Item label="Tiempo">
                <Input placeholder="Tiempo en segundos" onChange={(e)=> setDataOne({...dataPlayerOne,time: e.target.value, playerTurn: true})}/>
                </Form.Item>
              </div>
              <h2 style={{textAlign:"center", fontStyle:"italic"}}>VS</h2>
              <div style={{display:"flex", gap:20}}>
                <Form.Item label="Jugador 2">
                    <Input placeholder="Nombre" onChange={(e)=> setDataTwo({...dataPlayerTwo,name: e.target.value})}/>
                </Form.Item>
                <Form.Item label="Tiempo">
                    <Input placeholder="Tiempo en segundos" onChange={(e)=> setDataTwo({...dataPlayerTwo,time: e.target.value, playerTurn:false})}/>
                </Form.Item>
              </div>
              <div style={{display: "flex", justifyContent: "center", marginTop: 25}}>
                <Form.Item>
                    <Button onClick={handleButton} type="primary">Submit</Button>
                </Form.Item>
              </div>
            </Form>
        )
    
}

