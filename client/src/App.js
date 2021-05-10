import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../src/components/Header';
import Home from '../src/pages/Home';





function App() {
  return (
    <Router>
        <div>
            
              <Header />
              <Route exact path={"/"}><Home /></Route>
             
       </div>
    </Router>
  );
}

export default App;
