import React from "react";
import Display from '../Display';

//pass books to display component 
function SearchResults(book) {

         return (
            <Display book={book} />
        )
}

export default SearchResults;

