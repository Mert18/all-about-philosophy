import React from 'react'
import begin from '../images/pinky.jpg'


const Article = () => {
    return(
        <div className="transition duration-500 ease-in-out flex w-3/5 mb-14 border-2 border-pink-200 border-opacity-100 hover:bg-pink-200 cursor-pointer">
            <img className="p-5" src={begin} alt="beginning" width="150px"/>
            <h2 className="mt-10 ml-20 text-pink-700">About Stoicism</h2>
        </div>
    )
}

export default Article