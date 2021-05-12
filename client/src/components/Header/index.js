import React from 'react';
import { Jumbotron, Container } from "react-bootstrap";
import "./style.css";

//Header on both pages
function Header (){
    return(
        <Jumbotron fluid>
        <Container className="headerContainer">
          <h1>Your Next Adventure Is Waiting</h1>
          <p>
           Grab a drink, get cozy... Let's curl up with a good book!
          </p>
          <a className="searchOption" href="/">Search For Something New</a> 
          <a className="saved" href="/books">Saved For Me</a>

        </Container>
      </Jumbotron>

    )
}
export default Header;