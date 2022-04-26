import React from 'react';
import './cardPequeno.css'





function CardPequeno(props) {
    return (
        <div className="small-container">
            <img src={ props.imagem } />
            <div>
                <p>{props.email}</p>

                <p>{props.endereço}</p>
                
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;