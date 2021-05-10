import React, {useState, useEffect} from 'react';
import {Container} from '../components/Grid';
import Search from '../components/Search';
import API from '../utils/API';
import Display from '../components/Display';




function Home() {
    const [books, setBooks] = useState({
        _id: 0,
        title: "",
        author: "",
        description: "",
        link: "",
        image: "",
        date: "",
    });

    const [search, setSearch] = useState({title: ""});
    const [error, setError] = useState("");

    useEffect(()=>{
        API.searchBooks({search})
        .then(res => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
              }
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
            console.log("in search books " + res)
            setBooks(res)
        })
        .catch(err => {
            setError(err.message)
            console.log({error})
        });
    },[])    

   const handleSubmitButton = event => {
    event.preventDefault();
       setSearch(event.target.value)
   }

   

    return (
        <Container>
        <Search handleFormSubmit={handleSubmitButton}/>
        <Display books={books}/>
        </Container>

    )
}
export default Home;