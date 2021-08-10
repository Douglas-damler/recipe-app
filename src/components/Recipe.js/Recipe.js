import React from 'react';

export const Recipe = ({recipe, children, toFavorite}) => {
    return (
        <div key={recipe.idMeal} className="recipe">
            <span className="recipe-container">
                <h3 className="recipe-name">{recipe.strMeal}</h3>
                <div className="img-container">
                    <img src={recipe.strMealThumb} alt="" className="recipe-image" />
                </div>
            </span>
            {children}
        </div>
    )
}