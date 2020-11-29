import React from 'react';

const Card = (props) => {

    return(
        <div className="w-1/4 m-5 h-64">
            <h1 className="w-full text-5xl mb-10 mt-10">{props.main}</h1>
            <p>{props.exp}</p>
        </div>
    )
}

export default Card;