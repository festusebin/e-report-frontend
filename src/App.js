import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

function App() {
  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
