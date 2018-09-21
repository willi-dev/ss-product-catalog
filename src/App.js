import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:product" component={ProductDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
