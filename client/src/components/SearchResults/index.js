import React from "react";


function SearchResults({title, image, author, description}) {
  
   
        return (
            <div className="row">
                <div className="col-md-3">
                    <img src={image} alt="..."></img>
                </div>
                <div className="col-md-9">
                    <h1>{title}</h1>
                    <h3>By: {author}</h3>
                    <p>About: {description}</p>
                </div>
            </div>
        )
   

 
}

export default SearchResults;

