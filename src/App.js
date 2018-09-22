import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderNav from './components/general/HeaderNav';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/product" component={ProductList} />
                <Route path="/product/:product" component={ProductDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
