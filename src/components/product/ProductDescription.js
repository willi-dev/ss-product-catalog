import React, { Component } from 'react';

class ProductDescription extends Component {

  render() {
    return (
      <div className="ss-product__description">
      	<div dangerouslySetInnerHTML={{__html: this.props.desc}}>
      	</div>
      </div>
    );
  }

}

export default ProductDescription;
