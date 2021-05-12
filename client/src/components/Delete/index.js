import React from 'react';

function DeleteBtn({id, deletebook}) {
    return (
      <span className="delete-btn" role="button" tabIndex="0" onClick = {()=> deletebook(id)}>
        ✗ Remove this book
      </span>
    );
  }
  
  export default DeleteBtn;
  