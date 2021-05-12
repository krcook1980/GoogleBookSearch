import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Search from '../components/Search';
import API from '../utils/API';
import SearchResults from '../components/SearchResults'
import Save from '../components/Save'



function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  //click to search google
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
        
      })
      .catch(err => setError(err.message));
  }

  //set search query item for google api
  const handleInputChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
  };

  //save the book to the database
  const handleSave = book => {
    console.log(book, "book save")
    const newBook = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.searchInfo === undefined ? "" : book.searchInfo.textSnippet,
      image: book.volumeInfo.imageLinks === undefined ? "https://www.collinsdictionary.com/images/thumb/book_181404689_250.jpg?version=4.0.151" : book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }
    API.saveBook(newBook)
      .then(res => alert("Successfully added!"))
  }

 //What will display on Home page
  return (
    <Container >
      <h1 className="search">Book Search</h1>
      <Search
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange} results={search} />

        {/*handle display of returned search items  */}
      {books.map((book, index) => (
        <>
          <SearchResults
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.searchInfo === undefined ? "Unavailable" : book.searchInfo.textSnippet}
            image={book.volumeInfo.imageLinks === undefined ? "https://www.collinsdictionary.com/images/thumb/book_181404689_250.jpg?version=4.0.151" : book.volumeInfo.imageLinks.thumbnail}
            key={index}
            link={book.volumeInfo.infoLink}

          />
      
          <Save book={book} handleSave={handleSave} key={index}/>
        </>

      ))}

    </Container>
  )
}
export default Home;