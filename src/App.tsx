import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '../src/components/Loading'
import { Analytics } from '@vercel/analytics/react';

import Home from './views/Home'
import BlogExample from './views/BlogExample'
import Blog from './views/Blog'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <Router>
       <Analytics />
        <Switch>
        <Route exact path="/">
          <Home />
          <Loading />
        </Route>
        <Route exact path="/blogexample">
          <BlogExample/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
