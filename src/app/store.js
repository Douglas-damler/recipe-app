import { createStore, combineReducers } from "redux";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { SearchTermReducer } from "../features/searchTerm/searchTermSlice";

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: SearchTermReducer
}));