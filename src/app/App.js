import './App.css';
import { FavoriteRecipes } from '../features/favoriteRecipes/favoriteRecipes';
import { AllRecipes } from '../features/allRecipes/allRecipes';
import { SearchTerm } from '../features/searchTerm/searchTerm';


export const App = () => {
  return (
    <div className="main">
      <br />
      <SearchTerm />
      <h3>Favorite Recipes</h3>
      <hr />
      <FavoriteRecipes />
      <h3>Featured Latest Recipes</h3>
      <AllRecipes />
    </div>
  )
}