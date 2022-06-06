import React from "react";
import ListFooter from "../ListFooter/ListFooter";


const ContactFooter = () => {

    const contactList = [
        {
            text: 'Rodovia Arthur Boigues Filho, 59 CEP: 19026-650 Presidente Prudente  SP ',
            link: '/contact'
        },
    ]

    return (
        <ListFooter title='Contato' contents={contactList} />
    )
}

export default ContactFooter