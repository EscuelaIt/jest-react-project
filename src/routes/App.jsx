
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../containers/Users';
import UserDetail from '../containers/UserDetail';
import Contact from '../containers/Contact';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/users/:id" component={UserDetail} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;