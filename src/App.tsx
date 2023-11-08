import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '../src/components/Loading'

import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
          <Home />
          <Loading />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
