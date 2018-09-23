import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderNav from '../general/HeaderNav';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class Product extends Component {
	
	render() {
		return (
			<div className="ss-product"> 
				<HeaderNav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
            	<Route exact path="/" component={ProductList} />
          		<Route exact path="/product" component={ProductList} />
		          <Route exact path="/product/:product" component={ProductDetail} />
		       	</div>
          </div>
        </div>
			</div>
		);
	}

}

export default Product;
