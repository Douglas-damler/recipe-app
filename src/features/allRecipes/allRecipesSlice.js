const initiallRecipes = [];

// Load data action creator.
export const allRecipesLoadData = (data) => {
    return {
        type: 'allRecipe/loadData',
        payload: data
    }
}


export const allRecipesReducer = (allRecipes = initiallRecipes, action) => {
    switch(action.type) {
        case 'allRecipe/loadData': {
            return action.payload;
        }

        case 'favoriteRecipes/addRecipe': {
            return allRecipes.filter((recipe) => recipe.idMeal !== action.payload.idMeal);
        }

        case 'favoriteRecipes/removeRecipe': {
            return [...allRecipes, action.payload];
        }

        default: {
            return allRecipes;
        }
    }
    
}

export const selectAllRecipes = (state) => state.allRecipes;
