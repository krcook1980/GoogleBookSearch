import React from "react";
import { Books } from "../../../../models";
import {Row, Col } from '../Grid';


function Display(){
   const books = useContext(BooksContext)
 
    return(
        
            <Row>
                <Col size="col-md=3">
                    <img src={books.image} alt="..." />
                </Col>
                <  Col size="col-md-8">
                     <Row>
                        <Col size="col-md-12">
                            <div>
                               <h1>Title:  {books.title}</h1>
                            </div>
                            <div>
                               <h3>Author: {books.author}</h3> 
                            </div>
                            <div>
                               <p>Description: {books.description}</p> 
                            </div>
                            <div>
                                <p>Link: <a href={books.link}>{books.link}</a></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
      
    )
}

export default Display;