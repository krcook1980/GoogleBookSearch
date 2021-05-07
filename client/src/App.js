import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import Book from '../src/pages/Book';



function App() {
  return (
    <Router>
        <div>
            <Header />
            <Route exact path={["/", "/books"]}><Home /></Route>
            <Route exact path='/books/:id'><Book /></Route>
        </div>
    </Router>
  );
}

export default App;
