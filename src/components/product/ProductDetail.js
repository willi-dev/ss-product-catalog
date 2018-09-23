import React, { Component } from 'react';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductSize from './ProductSize';
import ProductAddToCart from './ProductAddToCart';
import ModalDisplay from '../general/ModalDisplay';
import Loading from '../general/Loading';
import { firebaseConfig } from '../../services/firebase';

let INITIAL_STATE = {
  showModal: false,
  isLoading: true,
  product_title: '',
  product_image: '',
  product_price: '',
  product_size: [],
  product_description: '',
}

class ProductDetail extends Component {
  
  constructor( props ){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  /*
   * show modal 
   */
  showModal = () => {
    this.setState({ showModal: true });
  }

  /*
   * close modal 
   */
  closeModal = () => {
    this.setState({ showModal: false });
  }

  /*
   * loadProductDetail 
   * load product detail base on match params product slug
   */
  loadProductDetail = () => {
    const productSlug = this.props.match.params.product;
    const refCollectionName = '/products_example';
    let dataProduct = firebaseConfig.database().ref(refCollectionName).orderByChild('product_slug').equalTo( productSlug );
    dataProduct.on( 'value', snapshot => {
      let arrayProd = Object.values( snapshot.val() );

      this.setState({
        isLoading: false,
        product_image: arrayProd[0].product_image,
        product_title: arrayProd[0].product_title,
        product_price: arrayProd[0].product_price,
        product_size: arrayProd[0].product_size,
        product_description: arrayProd[0].product_description
      })
    });
  }

  componentDidMount() {
    // load product detail
    this.loadProductDetail();
  }

  render() {
    const { isLoading, showModal, product_image, product_title, product_price, product_size, product_description } = this.state;
    let elClass = ( isLoading ) ? 'ss-product__box ss-product__detail ss-hide': 'ss-product__box ss-product__detail ss-block'
    let ssContainer = ( isLoading ) ? 'ss-container-loading': '';
    return (
      <div className={ssContainer}>
        { 
          ( isLoading ) && (
            <Loading />
          )
        }
        <div className={elClass}>
          <ModalDisplay showModal={showModal} closeModal={this.closeModal}>
            <ProductImage url={product_image}/>
          </ModalDisplay>
          <a onClick={this.showModal}>
            <ProductImage url={product_image} onClick={this.showModal}/>
          </a>
          <ProductTitle title={product_title} />
          <ProductPrice price={product_price} />
          <ProductSize size={product_size} />
          <ProductDescription desc={product_description}/>
          <ProductAddToCart />
        </div>
      </div>
    );
  }

}

export default ProductDetail;
