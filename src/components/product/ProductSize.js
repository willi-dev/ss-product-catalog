import React, { Component } from 'react';

class ProductSize extends Component {

  render() {
    let { size } = this.props;
    return (
      <div className="ss-product__size">
        <ul>
          {
            size.map( (item, index ) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    );
  }

}

export default ProductSize;
