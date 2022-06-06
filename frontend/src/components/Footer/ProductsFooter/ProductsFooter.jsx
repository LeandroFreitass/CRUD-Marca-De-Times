import React from "react";
import ListFooter from "../ListFooter/ListFooter";

const ProductsFooter = () => {

    const productsList = [
        { text: 'Sobre a FutFanatics', link: '/' },
        { text: 'Programa de Afiliados', link: '/' },
        { text: 'International Orders', link: '/' },
        { text: 'Blog da Fut', link: '/' }
    ]

    return (
        <ListFooter title='INSTITUCIONAL' contents={productsList} />
    )
}

export default ProductsFooter