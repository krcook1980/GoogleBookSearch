import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Search from '../components/Search';





function Home(){

    const [books, setBooks] = useState([]);
    const [formInput, setFormInput] = useState({});

    useEffect(() => {
        showBooks()
    }, []);
   
    function showBooks(){
        API.getBooks()
        .then(result => {
            setBooks( result.data)
        .catch(err => console.log(err));
        })
    }

    function searchBooks(){
        API.searchBooks()
        .then(response => response.json())
        .then(result => {
            setBooks( result.data)
        .catch(err => console.log(err));
        })
    };

    return(
        <Search />



    )
}
export default Home;