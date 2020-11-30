/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
const Article = (props) => {
    return(
        <div className="transition duration-500 ease-in-out flex w-3/5 mb-14 hover:bg-pink-200 cursor-pointer">
            {props.image}
            <h2 className="mt-10 ml-20 text-pink-700">{props.title}</h2>
        </div>
    )
}

export default Article