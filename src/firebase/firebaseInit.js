import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC1GF0rOK4JPsSLTSbX6oDBLJUez2Xi0ug',
  authDomain: 'stock-management-b6770.firebaseapp.com',
  projectId: 'stock-management-b6770',
  storageBucket: 'stock-management-b6770.appspot.com',
  messagingSenderId: '286524031951',
  appId: '1:286524031951:web:303c8100f4518f812b08ba'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
