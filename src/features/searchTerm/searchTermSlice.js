const initialSearchTerm = '';

// Acion creator for adding a search term.
export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/addSearchTerm',
        payload: term
    }
}

// Action creator for clearing a search term.
export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

// Search term reducer function.
export const SearchTermReducer = (searchTerm=initialSearchTerm, action) => {
    switch(action.type) {
        case 'searchTerm/addSearchTerm': {
            return action.payload;
        }

        case 'searchTerm/clearSearchTerm': {
            return '';
        }

        default: {
            return searchTerm;
        }
    }
}

export const selectSearchTerm = state => state.searchTerm;