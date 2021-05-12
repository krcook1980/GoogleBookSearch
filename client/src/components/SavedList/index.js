import React, { useState, useEffect } from 'react';
import Display from '../Display';
import API from '../../utils/API';
import {Container} from '../Grid';
import Delete from '../Delete';

const SavedBooks = () => {
    const [bookState, setBookState] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
       getBooks()
    },[]);

    const deletebook = id => {
        
        API.deleteBook(id)
        .then(res => {
            console.log("book removed") 
            getBooks()
        })
    };

    const getBooks = () => {
        API.getBooks()
        .then(res => {
            setBookState(res.data);
            console.log("I am in getbooks" + JSON.stringify(bookState))
        })
        .catch(err => setError(err));
    };

    return(
        <Container>
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

        </Container>
    )

}
export default SavedBooks;