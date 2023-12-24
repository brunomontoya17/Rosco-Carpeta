import { createContext, useState} from "react";

export const playersContext = createContext([]);

function PlayersContextProvider({ children }) {

    const [players, setPlayers] = useState([])   

    return (
        <playersContext.Provider value={{
            players,
            setPlayers
        }}>
            { children }
        </playersContext.Provider>
    )
}

export default PlayersContextProvider;