import React, { Component } from 'react';

class ProductPrice extends Component {

  render() {
    return (
      <div className="ss-product__price">
        {this.props.price}
      </div>
    );
  }

}

export default ProductPrice;