const initialFavoriteRecipes = [];

// Add recipe action creator.
export const addFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    }
}

export const removeFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe
    }
}

export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
        case 'favoriteRecipes/addRecipe': {
            return [...favoriteRecipes, action.payload];
        }

        case 'favoriteRecipes/removeRecipe': {
            return favoriteRecipes.filter((recipe) => recipe.idMeal !== action.payload.idMeal);
        }

        default: {
            return favoriteRecipes;
        }
    }
}

export const selectFavoriteRecipes = state => state.favoriteRecipes;