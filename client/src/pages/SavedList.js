import React, { useState, useEffect } from "react";
import Delete from "../components/Delete";
import { Link } from "react-router-dom";
import BooksContext from "../utils/BooksContext";
import { Container } from '../components/Grid';
import Display from '../components/Display';
import API from "../utils/API";




const SavedList = () => {
    const [books, setBooks] = useState({
        _id: 0,
        title: "",
        author: "",
        description: "",
        link: "",
        image: "",
        date: "",
    });

    const [error, setError] = useState("");


    const getBooks = (req, res) => {
        API.getBooks()
        .then(res => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
              }
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
            console.log("I did it API" + res)
            setBooks(res)
        })
        .catch(err => {
            setError(err.message)
            console.log({error})
        });
    };

    const deleteBook = id => {
       
    };

    useEffect(() => {
        getBooks();
    },[]);

    return (
        <Container>
            <BooksContext.Provider value={books}>
            <h1>Saved Books</h1>
            {books.length ? (
                <div>

                    {books.saved.map(book => (
                        <div>
                        <Display book={books} key={book._id} />
                            <Link to={"/posts/" + book._id}>

                                {book.title} by {book.author}

                            </Link>
                            <Delete onClick={() => deleteBook(book._id)} />
                        </div>
                    ))}
                </div>
      ) : (
                <h3>You haven't added any saved books yet!</h3>
      )}
    </BooksContext.Provider>
    </Container>
            );
};

export default SavedList;
