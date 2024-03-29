import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '../src/components/Loading'

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
import Blog6 from './views/Blog/Blog6'
import Blog7 from './views/Blog/Blog7'
import Blog8 from './views/Blog/Blog8'
import Blog9 from './views/Blog/Blog9'





const App = () => {
  return (
    <HelmetProvider>
    <Router>
        <Switch>
        <Route exact path="/">
            <Helmet>
              <title>BLUCKA: Crypto Creative Agency </title>
            </Helmet>
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

        <Route exact path="/blog/what-is-web3-marketing-agency">
          <Blog6/>
        </Route>

        <Route exact path="/blog/how-do-i-get-web3-marketing">
          <Blog7/>
        </Route>

        <Route exact path="/blog/what-is-web3-advertising">
          <Blog8/>
        </Route>
        
        <Route exact path="/blog/what-is-the-difference-between-web2-marketing-and-web3-marketing">
          <Blog9/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </HelmetProvider>
  );
};

export default App;