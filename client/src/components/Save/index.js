import React from 'react';
import Book from '../../pages/Book';

function SaveBtn({book, handleSave}) {
    return (
      <span className="delete-btn" role="button" tabIndex="0" onClick={()=> handleSave(book)}>
        Save This One
      </span>
    );
  }
  
  export default SaveBtn;