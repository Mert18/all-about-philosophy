import React from 'react';

const CategoryItem = (props) => {

    const { title, excerpt } = props;
    return (
        <div className="category__item">
            <h1 className="category__item__title">{title}</h1>
            <h3 className="category__item__excerpt">{excerpt}</h3>
        </div>
    )
}

export default CategoryItem;