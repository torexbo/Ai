import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PosterGenerator from './components/PosterGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/generate" component={PosterGenerator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
