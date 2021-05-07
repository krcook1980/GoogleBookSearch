import React from 'react';
import { Button, Form } from "react-bootstrap";

import "./style.css";

function Search() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Book Search
            </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Search;