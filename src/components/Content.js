import React from 'react';
import Article from './Article'
import Pagination from './Pagination.js'

const Content = () => {

    return(
        <div>

            <div className="mt-36 flex flex-wrap justify-center">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
            </div>

            <div className="mb-10">
                <Pagination />
            </div>
        </div>
    )
}
export default Content