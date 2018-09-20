import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductItem from './components/productitem/ProductItem';
import ProductList from './components/productlist/ProductList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:productname" component={ProductItem} />
        </Switch>
      </div>
    );
  }
}

export default App;
