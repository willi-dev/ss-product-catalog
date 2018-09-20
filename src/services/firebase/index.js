import * as firebase from 'firebase';

var config = {
  apiKey: "",
  authDomain: "",
  databaseUrl: "",
  projectId: "",
  storageBucket: "",
  messangingSenderId: ""
}

const firebaseConfig = firebase.initializeApp( config );
const auth = firebase.auth();

export {
  firebaseConfig, auth 
}