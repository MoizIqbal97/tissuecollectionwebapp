import Navbar from './Navbar';
import Home from './Home';
import CreateCollections from './CreateCollections';
import CreateSample from './CreateSample';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/createcollections">
              <CreateCollections />
            </Route>
            <Route path="/createsample">
              <CreateSample/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;