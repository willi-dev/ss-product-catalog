import React, { Component } from 'react';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductSize from './ProductSize';
import ProductAddToCart from './ProductAddToCart';

class ProductDetail extends Component {
  
  render() {
    return (
      <div className="ss-product__box ss-product__detail">
        <ProductImage url={this.props.location.dataItem.product_image}/>
        <ProductTitle title={this.props.location.dataItem.product_title} />
        <ProductPrice price={this.props.location.dataItem.product_price} />
        <ProductSize size={this.props.location.dataItem.product_size} />
        <ProductDescription desc={this.props.location.dataItem.product_description}/>
        <ProductAddToCart />
      </div>
    );
  }

}

export default ProductDetail;
