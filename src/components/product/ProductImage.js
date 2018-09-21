import React, { Component } from 'react';

class ProductImage extends Component {

  render() {
    return (
      <div className="ss-product__image">
        <img src={this.props.url} className="img-fluid" alt=""/>
      </div>
    );
  }

}

export default ProductImage;
