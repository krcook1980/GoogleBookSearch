import React from 'react';
import "./style.css";

function Display({book}){
  
     return(
    <div className="card">
      <img src={book.image} alt="Card image cap" className="float-left" />
      <h1>Title:  {book.title}</h1>
      <h3>Author: {book.author}</h3>
      <p>Description: {book.description}</p>
      <p>Link: <a href={book.link} target="_blank">See Book Here</a></p>
    </div>


          )
}

export default Display;

