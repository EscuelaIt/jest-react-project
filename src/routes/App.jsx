
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from '../containers/Users';
import UserDetail from '../containers/UserDetail';
import Footer from '../components/Footer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route exact path="/users/:id" component={UserDetail} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;