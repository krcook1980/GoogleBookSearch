import React, { useState } from 'react';
import { Container } from '../components/Grid';
import Search from '../components/Search';
import API from '../utils/API';
import SearchResults from '../components/SearchResults'
import Save from '../components/Save'



function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
 
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!search) {
      return;
    }
    API.searchBooks(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }

        setBooks(res.data.items)
        setError("")
        console.log("books now ",  res.data.items)
      })
      .catch(err => setError(err.message));
  }
  const handleInputChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
    console.log("I am updated ")

  };

  const handleSave = book => {
    console.log(book, "book save")
    const newBook = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.searchInfo.textSnippet,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }
    API.saveBook(newBook)
    .then(res => console.log(res, " successfully added"))
  }


  return (
    <Container>
      <h1>Book Search</h1>
      <Search
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange} results={search} />
      {books.map((book, index) => (
          <>
          <SearchResults
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.searchInfo.textSnippet}
            image={book.volumeInfo.imageLinks.thumbnail}
            key={index}
            link={book.volumeInfo.infoLink}
          
          />
        
          <Save book={book} handleSave={handleSave}/>
        </>

      ))}

    </Container>
  )
}
export default Home;