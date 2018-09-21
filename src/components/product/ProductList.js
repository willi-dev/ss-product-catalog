import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { firebaseConfig } from '../../services/firebase';

let INITIAL_STATE = {
	lastKey: '',
	nextPage: 1,
	lastPage: false,
	products: [],
  isLoading: false
}
// display product per page 
const perPage = 5;

class ProductList extends Component {

	constructor( props ){
		super(props);
		this.state = { ...INITIAL_STATE };
	}
  
  /*
   * scrollLoad
   * scroll to bottom and load data
   */
  scrollLoad = () => {
    let { isLoading, lastPage } = this.state;
    
    if( isLoading || lastPage ) return;

    if ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ){
      this.setState({ isLoading: true });
      this.loadProducts();

    }
  }

	/*
	 * loadProducts
	 * load product from firebase database
	 */
	loadProducts = () => {
		let { lastKey, lastPage, nextPage, products } = this.state;
    const refCollectionName = '/products_example';
		let dataProducts = (nextPage === 1 ) 
      ? firebaseConfig.database().ref(refCollectionName).orderByKey().limitToLast( perPage ) 
      : firebaseConfig.database().ref(refCollectionName).orderByKey().endAt( lastKey ).limitToLast(perPage+1);
    
		dataProducts.on( 'value', snapshot => {
      // console.log( snapshot.val() );
      // get keys of value data product for reverse order
			let arrayOfKeys = ( nextPage === 1 ) ? Object.keys( snapshot.val() ).sort( function(a, b) {return a - b} ).reverse() : Object.keys( snapshot.val() ).sort( function(a, b) {return a - b} ).reverse().slice(1);
			
      console.log(arrayOfKeys);

			let arrayProducts = arrayOfKeys.map( (val, key) => (
				snapshot.val()[val]
			))

      console.log( arrayProducts );

			this.setState({
				lastKey: arrayOfKeys[arrayOfKeys.length-1],
				products: [...products, ...arrayProducts],
				nextPage: nextPage+1,
				lastPage: ( snapshot.numChildren() < perPage ) ? !lastPage : lastPage,
        isLoading: false,
			});

		});
	}

	componentWillMount() {
    // load products 
		this.loadProducts();
	}

  render() {
  	let { products } =  this.state;
    return (
      <div className="ss-product__list">
      	{
      		products.map( (item, index) => (
	    			<ProductItem key={index} dataItem={item}/>
      		))
      	}
      </div>
    );
  }
  
  componentDidMount() {
    // console.log( this.state );
    window.addEventListener('scroll', this.scrollLoad)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollLoad);
  }

}

export default ProductList;
