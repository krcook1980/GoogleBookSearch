import React from 'react';
import "./style.css";

function DeleteBtn({id, deletebook}) {
    return (
      <span className="delete-btn" role="button" tabIndex="0" onClick = {()=> deletebook(id)}>
        ✗ Remove this book
      </span>
    );
  }
  
  export default DeleteBtn;
  