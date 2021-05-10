import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../src/components/Header';
import Practice from '../src/pages/Practice';





function App() {
  return (
    <Router>
        <div>
            
              <Header />
              <Route exact path={"/"}><Practice /></Route>
             
       </div>
    </Router>
  );
}

export default App;
