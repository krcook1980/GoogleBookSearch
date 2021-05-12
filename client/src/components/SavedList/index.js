import React, { useState, useEffect } from 'react';
import Display from '../Display';
import API from '../../utils/API';
import {Container} from 'reactstrap';
import Delete from '../Delete';

//return books from database
const SavedBooks = () => {
    const [bookState, setBookState] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
       getBooks()
    },[]);

    // remove from database if desired
    const deletebook = id => {
        
        API.deleteBook(id)
        .then(res => {
            alert("Book was removed") 
            getBooks()
        })
    };

    const getBooks = () => {
        API.getBooks()
        .then(res => {
            setBookState(res.data);
        })
        .catch(err => setError(err));
    };

    //what is displayed on the page
    return(
        <>
            
           {bookState.length ? (
               <div>
            {bookState.map((book, index) => 
               <>
               <Display book={book} key={index}/>
                <Delete deletebook={deletebook} id={book._id} />
                </>
            )}
            </div>
           ) : (
            <h3>You haven't added any saved books yet!</h3>
           )}

        </>
    )

}
export default SavedBooks;