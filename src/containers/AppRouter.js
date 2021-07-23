import React from 'react';
// import Products from '../components/Products';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
