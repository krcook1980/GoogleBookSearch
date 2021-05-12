import React from 'react';

function SaveBtn({book, handleSave}) {
    return (
      <span className="save-btn" role="button" tabIndex="0" onClick={()=> handleSave(book)}>
        ✓ Save This One
      </span>
    );
  }
  
  export default SaveBtn;