import React from "react";
import {Row, Col } from '../Grid';

function Display({book}){
  
     return(
        
            <Row>
                <Col size="col-md=3">
                    <img src={book.image} alt="..." />
                </Col>
                <Col size="col-md-9">
                     <Row>
                        <Col size="col-md-12">
                            <div>
                               <h1>Title:  {book.title}</h1>
                            </div>
                            <div>
                               <h3>Author: {book.author}</h3> 
                            </div>
                            <div>
                               <p>Description: {book.description}</p> 
                            </div>
                            <div>
                                <p>Link: <a href={book.link} target="_blank">See Book Here</a></p>
                            </div>
                           
                        </Col>
                    </Row>
                </Col>
            </Row>
          )
}

export default Display;