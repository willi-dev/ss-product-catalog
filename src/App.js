import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from './components/product/Product';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
