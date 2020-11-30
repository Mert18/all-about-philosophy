import React from 'react';

const Quote = (props) => {

    return(
        <div className="text-center mt-10 font-serif text-lg">
            <h2 className="mt-5">{props.quotes[0].line}</h2>
            <p className="text-gray-400 mb-5">―{props.quotes[0].author}</p>
        </div>
    )
}

export default Quote;