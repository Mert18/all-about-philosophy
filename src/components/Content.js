import React from 'react';
import Article from './Article'
import Pagination from './Pagination.js'
import begin from '../images/pinky.jpg'
const Content = (props) => {

    return(
        <div>

            <div className="mt-36 flex flex-wrap justify-center">
                    <Article image={begin} title="I gotta find myself" />
                    <Article image={begin} title="Gonna find it now" />
                    <Article image={begin} title="I gonna be a man" />
                    <Article image={begin} title="Gonna find him now" />
                    <Article image={begin} title="I gotta be a man" />
            </div>

            <div className="mb-10">
                <Pagination />
            </div>
        </div>
    )
}
export default Content