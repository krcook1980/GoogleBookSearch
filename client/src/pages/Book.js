import React from 'react';
import {Container} from '../components/Grid';
import Display from '../components/Display';

function Book(books){
    return(
       <Container>
           <Display books={books} />
       </Container>
    )
}

export default Book;