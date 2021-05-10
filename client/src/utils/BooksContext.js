import React from 'react';

const BooksContext = React.createContext({
    _id: 0,
    title: "",
    author: "",
    description: "",
    link: "",
    image: "",
    date: "",
})

export default BooksContext;