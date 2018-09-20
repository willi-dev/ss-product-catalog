import React, { Component } from 'react';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductSize from './ProductSize';
import ProductAddToCart from './ProductAddToCart';

class ProductItem extends Component {

  render() {
    return (
      <div className="ss-product__item">
      	<ProductImage />
      	<ProductTitle />
      	<ProductPrice />
      	<ProductSize />
      	<ProductDescription />
      	<ProductAddToCart />
      </div>
    );
  }

}

export default ProductItem;
