import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteRecipes } from './favoriteRecipesSlice';
import { removeFavoriteRecipe } from './favoriteRecipesSlice';
import { Recipe } from '../../components/Recipe.js/Recipe';
import { FavoriteButton } from '../../components/favoriteButton.js/favoritebutton';

export const FavoriteRecipes = () => {
    const favoriteRecipe = useSelector(selectFavoriteRecipes);
    const dispatch = useDispatch();

    const handleRemoveFavoriteRecipe = (recipe) => {
        dispatch(removeFavoriteRecipe(recipe))
    }
    return (
        <div className="recipes-container">
            {favoriteRecipe.map(createRecipeComponent)}
        </div>
    )

    function createRecipeComponent(recipe){
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton
                    onClickHandler = {() => handleRemoveFavoriteRecipe(recipe)}
                >
                    Remove Favorite
                </FavoriteButton>
            </Recipe>
        )
    }
}