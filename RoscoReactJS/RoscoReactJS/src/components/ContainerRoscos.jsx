import './ContainerRoscos.css'
import Rosco from './Rosco';

function ContainerRoscos() {
    const listaLetras1 = new Array();
    const listaLetras2 = new Array();

    return (
        <div className='tablero'>
            <Rosco listaLetras={listaLetras1} />
        </div>
    )
}

export default ContainerRoscos;