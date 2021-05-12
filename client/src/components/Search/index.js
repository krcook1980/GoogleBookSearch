import React from 'react';


import "./style.css";

function Search({handleFormSubmit, handleInputChange, search}) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Book:</label>
                <input
                    value={search}
                    onChange={handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Type in a book title to begin"
                    id="term"
                />
                <button type="submit" onClick={handleFormSubmit} className="btn">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Search;