import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '../src/components/Loading'
import { Analytics } from '@vercel/analytics/react';

import Home from './views/Home'
import BlogExample from './views/BlogExample'
import Blog from './views/Blog'
import Contact from './views/Contact'
import NotFound from './views/NotFound'


//Blogs
import Blog1 from './views/Blog/Blog1'
import Blog2 from './views/Blog/Blog2'
import Blog3 from './views/Blog/Blog3'
import Blog4 from './views/Blog/Blog4'
import Blog5 from './views/Blog/Blog5'




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
        
        <Route exact path="/blog/merging-genius-for-web3-marketing">
          <Blog1/>
        </Route>

        <Route exact path="/blog/elevating-presence-in-bull-market">
          <Blog2/>
        </Route>


        <Route exact path="/blog/unleash-the-web3-gaming">
          <Blog3/>
        </Route>

        <Route exact path="/blog/bears-bulls-bitcoins">
          <Blog4/>
        </Route>

        <Route exact path="/blog/give-me-liquidity-or-give-me-death">
          <Blog5/>
        </Route>
        
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;