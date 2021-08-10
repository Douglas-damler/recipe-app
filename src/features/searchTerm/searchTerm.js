import React from 'react';
import './searchTerm.css';
import { setSearchTerm } from './searchTermSlice';
import { clearSearchTerm } from './searchTermSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectSearchTerm } from './searchTermSlice';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleSearchTermChange = (term) => {
        dispatch(setSearchTerm(term));
    }

    const handleClear = () => {
        dispatch(clearSearchTerm());
    }

    return (
        <div className="searchBar">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input 
                className="searchTerm"
                placeholder="search"
                value={searchTerm}
                onChange={(e) => {
                    handleSearchTermChange(e.target.value)
                }}
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={handleClear}
                    type="button"
                    className="clearButton"
                >
                    <img src={clearIconUrl} alt=""/>
                </button>
            )}
        </div>
    )
}