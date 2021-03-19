import React from 'react';
import CategoryItem from './CategoryItem';

import { NavLink } from "react-router-dom";


const Categories = () => {
    return (
        <div className="categories">
            <NavLink to="/stoicism"><CategoryItem title="Stoicism" excerpt="All about stoicism" /></NavLink>
        </div>
    )
}

export default Categories;