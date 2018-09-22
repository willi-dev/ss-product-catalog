import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductSize from './ProductSize';
import ProductAddToCart from './ProductAddToCart';
import ModalDisplay from '../general/ModalDisplay';

class ProductDetail extends Component {
  
  state = { showModal: false }; 

  showModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="ss-product__box ss-product__detail">
        <ModalDisplay showModal={showModal} closeModal={this.closeModal}>
          <ProductImage url={this.props.location.dataItem.product_image}/>
        </ModalDisplay>
        <a onClick={this.showModal}>
        <ProductImage url={this.props.location.dataItem.product_image} onClick={this.showModal}/>
        </a>
        
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
