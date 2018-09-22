import React from 'react';

const ProductSize = ( props ) => (
  <div className="ss-product__size">
    <ul className="ss-product__list">Size 
      {
        props.size.map( (item, index ) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  </div>
);

export default ProductSize;
