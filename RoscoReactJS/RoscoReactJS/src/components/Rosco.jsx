import LetraRosco from "./LetraRosco";


function Rosco({listaLetras}) {
    const arrayLetras = ['A','B','C','D','E','F','G','H','I','J','L','M',
                        'N','Ñ','O','P','Q','R','S','T','U','V','X','Y','Z'];
    
    
    const renderRosco = () => {
        arrayLetras.map((letra, index) => {
            console.log(letra+index)
            return (
                
                <LetraRosco key={letra} char={letra} index={index} posX={50} posY={25} listaLetras={listaLetras} />
               
            )
        })
    }

    return (
        <div>
            {renderRosco()}
        </div>
    )
}

export default Rosco;