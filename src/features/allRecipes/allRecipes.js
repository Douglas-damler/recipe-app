import React, { useEffect, useState } from 'react';
import './allRecipes.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectAllRecipes, allRecipesLoadData } from './allRecipesSlice';
import { Recipe } from '../../components/Recipe.js/Recipe';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import { addFavoriteRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
import { FavoriteButton } from '../../components/favoriteButton.js/favoritebutton';
import ReactLoading from 'react-loading';


export const AllRecipes = () => {

    const [isLoading, setIsLoading] = useState(true);

    const allRecipes = useSelector(selectAllRecipes);
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const filterData = (term, data) => {
        return data.filter((dat) => dat.strMeal.toLowerCase().includes(term.toLowerCase()));
    }

    const filteredData = filterData(searchTerm, allRecipes);

    const  onAddRecipeHandler = (recipe) => {
        dispatch(addFavoriteRecipe(recipe))
    }
    
    useEffect(() => {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: 'https://themealdb.p.rapidapi.com/filter.php',
        params: {a: 'Canadian'},
        headers: {
            'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
            'x-rapidapi-host': 'themealdb.p.rapidapi.com'
        }
        };

        setTimeout(() => {
            axios.request(options).then(function (response) {
                const data = response.data
                const recipe = data.meals;
                dispatch(allRecipesLoadData(recipe));
                setIsLoading(false);
                }).catch(function (error) {
                    console.error(error);
                });
        }, 2000);
        
    }, [dispatch]);
        
    return (
        <>
            {
                isLoading === false ? (
                    
                    <div className="recipes-container">
                    {filteredData.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.id}>
                        <FavoriteButton onClickHandler={() => onAddRecipeHandler(recipe)}>
                            Add to Favorite ❤
                        </FavoriteButton>
                    </Recipe>
                    ))}
                    </div> 
                    
                ): (
                    <ReactLoading
                    type={"bars"}
                    color={"#03fc4e"}
                    height={100}
                    width={100}
                    background={'black'}
                />
                )
            }
        </>
    )
}



