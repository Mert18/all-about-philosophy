import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="m-10 bg-black p-4 rounded-xl">
            <p className="text-white"> Time : {date.toLocaleTimeString()}</p>
            <p className="text-white"> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime