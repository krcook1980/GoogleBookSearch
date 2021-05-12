import React from 'react';
import {Container} from 'react-bootstrap';
import SavedList from '../components/SavedList';


function Book(){
    return(
       <Container className="bookContainer">
           <SavedList />
       </Container>
    )
}

export default Book;