import React from 'react';

const BooksContext = React.createContext({
    title: "",
    author: "",
    description: "",
    image: "",
    link: "", 
    date: ""
});
export default BooksContext;