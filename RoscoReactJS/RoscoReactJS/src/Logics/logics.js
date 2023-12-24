export const EstadoLetra = {
    NEUTRO: "Neutro",
    PASAPALABRA: "Pasapalabra",
    CORRECTA: "Correcta",
    INCORRECTA: "Incorrecta",
    SELECTED: "Selected",
};

export const arrangeElementsInCircle = (elements, x, y, r) => {
    for (var i = 0; i < elements.length; i++) {
        elements[i].scaleX = 1 / elements.length
        elements[i].scaleY = 1 / elements.length
        elements[i].x = (x + r * Math.cos((2 * Math.PI) * i/elements.length))
        elements[i].y = (y + r * Math.sin((2 * Math.PI) * i/elements.length))
    }
}

export const switchWord = (feedArray, StateLetter) => {
    let newArray = [...feedArray];
                
    const oldSelected = feedArray.find(letter => letter.status === EstadoLetra.SELECTED);
    
    if (oldSelected) {
        oldSelected.status = StateLetter;
        const oldIndex = newArray.findIndex(item => item.letter === oldSelected.letter);
        newArray[oldIndex] = oldSelected;

        for (let item of newArray) {
            if ((item.status === EstadoLetra.NEUTRO) && (oldIndex < item.index)) {
                item.status = EstadoLetra.SELECTED
                break;
            }
        }
        //newArray[oldIndex+1].status = EstadoLetra.SELECTED;
        
    } else {

        const firstOption = feedArray[0]

        if (firstOption.status === EstadoLetra.NEUTRO) {
            newArray[0].status = EstadoLetra.SELECTED;
        } else {
            const nextNeuter = feedArray.find(letter => letter.status === EstadoLetra.NEUTRO);
            const neuterIndex = newArray.findIndex(item => item.letter === nextNeuter.letter);

            newArray[neuterIndex].status = EstadoLetra.SELECTED
        }
    }

    return newArray;
}