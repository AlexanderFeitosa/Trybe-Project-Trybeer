import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Admin,
  Login,
  Orders,
  Profile,
  Register,
  Products,
  Checkout,
} from './pages/index';
import Provider from './hooks/Provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/orders" component={ Orders } />
          <Route path="/products" component={ Products } />
          <Route path="/profile" component={ Profile } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/admin/orders" component={ Admin } />
          <Redirect from="/" to="/login" />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
