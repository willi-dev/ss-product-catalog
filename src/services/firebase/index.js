import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAW1IpCG_6iBjABRMdEJc8dDSQp6ExWfis",
  authDomain: "ss-product-catalog.firebaseapp.com",
  databaseURL: "https://ss-product-catalog.firebaseio.com",
  projectId: "ss-product-catalog",
  storageBucket: "ss-product-catalog.appspot.com",
  messagingSenderId: "337100790331"
}

const firebaseConfig = firebase.initializeApp( config );
const auth = firebase.auth();

export {
  firebaseConfig, auth 
}