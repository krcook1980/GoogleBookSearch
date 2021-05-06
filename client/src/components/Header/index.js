import React from 'react';
import { Jumbotron, Container } from "react-bootstrap";
import "./style.css";


function Header (){
    return(
        <Jumbotron fluid>
        <Container>
          <h1>Your Next Adventure Is Waiting</h1>
          <p>
           Grab a drink, get cozy... Let's curl up with a good book!
          </p>
        </Container>
      </Jumbotron>

    )
}
export default Header;