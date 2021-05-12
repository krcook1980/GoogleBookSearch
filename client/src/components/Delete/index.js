import React from 'react';
import "./style.css";

//button to remove book from saved list in database
function DeleteBtn({id, deletebook}) {
    return (
      <span className="delete-btn" role="button" tabIndex="0" onClick = {()=> deletebook(id)}>
        ✗ Remove this book
      </span>
    );
  }
  
  export default DeleteBtn;
  