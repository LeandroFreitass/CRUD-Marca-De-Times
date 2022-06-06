import React from "react";
import ListFooter from "../ListFooter/ListFooter";


const RoomsFooter = () => {

    const roomsList = [
        { text: 'Trocas e Devolução', link: '/' },
        { text: 'Política de Privacidade', link: '/' },
        { text: 'Regulamentos', link: '/' },
    ]

    return (
        <ListFooter title='AJUDA' contents={roomsList} />
    )
}

export default RoomsFooter