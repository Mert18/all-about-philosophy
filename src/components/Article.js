import React from 'react'
import begin from '../images/pinky.jpg'


const Article = () => {
    return(
        <div className="flex justify-center border-2 w-3/5 mb-14">
            <img src={begin} alt="beginning" width="150px"/>
            <h2 className="mt-10">About Stoicism</h2>
        </div>
    )
}

export default Article