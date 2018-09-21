import React, { Component } from 'react';

class ProductTitle extends Component {
  
  render() {
    return (
      <div className="ss-product__title">
        <p>{this.props.title}</p>
      </div>
    );
  }

}

export default ProductTitle;