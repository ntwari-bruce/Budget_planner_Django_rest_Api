import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="custom-width2 mx-auto p-2">
          <h1 className="text-center">My Budget Planner</h1>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
