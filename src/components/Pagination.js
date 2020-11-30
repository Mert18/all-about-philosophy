/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = () => {

    return(
        <div className="flex space-x-4 justify-center transition duration-500 ease-in-out">
                    <a className="w-10 transition duration-500 ease-in-out hover:bg-red-200 h-10" href="#">1</a>
                    <a className="w-10 transition duration-500 ease-in-out hover:bg-red-200" href="#">2</a>
                    <a className="w-10 transition duration-500 ease-in-out hover:bg-red-200" href="#">3</a>
                    <a className="w-10 transition duration-500 ease-in-out hover:bg-red-200" href="#">4</a>
                    <a className="w-10 transition duration-500 ease-in-out hover:bg-red-200" href="#">5</a>
        </div>
    )
}

export default Pagination