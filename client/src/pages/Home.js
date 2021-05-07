import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Search from '../components/Search';
import Display from '../components/Display';
import {Container} from '../components/Grid';
import { BooksContext } from '../utils/BooksContext';



function Home() {

    const [books, dispatch] = useStoreContext([]);
    const getSaved = () => {
        dispatch({ type: LOADING});
        dispatch({type: UPDATE_SAVED})
    }

    useEffect(() => {
        showBooks()
    }, []);

    function showBooks() {
        API.getBooks()
            .then(result => {
                console.log("I am in home API" + result)
                setBooks(result.data)
                    .catch(err => console.log(err));
            })
    }

    function searchBooks() {
        API.searchBooks()
            .then(response => response.json())
            .then(result => {
                setBooks(result.data)
                    .catch(err => console.log(err));
            })
    };

    handleSubmit = event => {
        const value = event.target.value;
        
        setFormInput(title={value})
        searchBooks({title})
    }

    return (
        <Container>
            <Search />

            {books.map((book, index) => {
                return (
                    <Display book={book} key={index} />
                )
            })
            }

        </Container>

    )
}
export default Home;