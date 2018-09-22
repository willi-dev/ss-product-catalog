import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductSize from './ProductSize';
import ProductAddToCart from './ProductAddToCart';

class ProductItem extends Component {

  render() {
    const linkTo = {
      pathname: '/product/'+this.props.dataItem.product_slug,
    }
    return (
      <div className="ss-product__box ss-product__item">
        <Link to={ linkTo }>
        	<ProductImage url={this.props.dataItem.product_image} />
        </Link>
        <Link to={ linkTo }>
          <ProductTitle title={this.props.dataItem.product_title} />
        </Link>
      	<ProductPrice price={this.props.dataItem.product_price} />
      	<ProductSize size={this.props.dataItem.product_size} />
      	<ProductAddToCart />
      </div>
    );
  }

}

export default ProductItem;
