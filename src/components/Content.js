import React from 'react';
import Article from './Article'
import Pagination from './Pagination.js'
import { ReactComponent as Bird } from '../assets/birdsvg-01.svg';
import { ReactComponent as Sun } from '../assets/sunsvg-01.svg';


const Content = (props) => {

    return(
        <div>

            <div className="mt-36 flex flex-wrap justify-center">
                    <Article image={<Bird className="w-min" />}title="I gotta find myself" />
                    <Article image={<Sun className="w-min" />} title="Gonna find it now" />
                    <Article image={<Bird className="w-min" />} title="I gonna be a man" />
                    <Article image={<Sun className="w-min" />} title="Gonna find him now" />
                    <Article image={<Bird className="w-max" />} title="I gotta be a man" />
            </div>

            <div className="mb-10">
                        <Pagination />
            </div>
        </div>
    )
}
export default Content