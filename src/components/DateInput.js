import React from 'react';

const DateInput = () => {

    return(
        <div className="flex flex-col w-1/5 justify-center m-auto">
                <p className="">Date of Birth</p>
                <input className="border-2 border-pink-100 mt-3" type="date" name="date" placeholder="20/03/2000" />
                <button className="transition ease-in-out bg-pink-200 rounded-md p-2 mt-3 hover:bg-pink-300" type="submit">GO</button>
        </div>
    )
}

export default DateInput;