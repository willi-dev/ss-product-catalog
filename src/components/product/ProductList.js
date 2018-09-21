import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { firebaseConfig } from '../../services/firebase';

let INITIAL_STATE = {
	lastKey: '',
	nextPage: 1,
	lastPage: false,
	products: []
}
// display product per page 
const perPage = 5;

class ProductList extends Component {

	constructor( props ){
		super(props);
		this.state = { ...INITIAL_STATE };
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
      : firebaseConfig.database().ref(refCollectionName).orderByKey().endAt( lastKey ).limitToLast( perPage+1 );

		dataProducts.on( 'value', snapshot => {
			let arrayOfKeys = ( nextPage === 1 ) ? Object.keys( snapshot.val() ).sort().reverse() : Object.keys( snapshot.val() ).sort().reverse().slice(1);
			console.log(arrayOfKeys)
			let arrayProducts = arrayOfKeys.map( (val, key) => (
				snapshot.val()[val]
			))

			this.setState({
				lastKey: arrayOfKeys[arrayOfKeys.length-1],
				products: [...products, ...arrayProducts],
				nextPage: nextPage+1,
				lastPage: ( snapshot.numChildren() < perPage ) ? !lastPage : lastPage
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

}

export default ProductList;
