import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import Book from '../src/pages/Book';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
             <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/books' component={Book} />
              </Switch>
             
       </div>
    </Router>
  );
}

export default App;
