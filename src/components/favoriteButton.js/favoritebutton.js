import React from 'react';

export const FavoriteButton = ({recipe, onClickHandler, children}) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>{children}</button>
    )
}