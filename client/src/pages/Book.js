import React from 'react';
import {Container} from 'react-bootstrap';
import SavedList from '../components/SavedList';

// display books returned from database
function Book(){
    return(
       <Container className="bookContainer">
           <SavedList />
       </Container>
    )
}

export default Book;