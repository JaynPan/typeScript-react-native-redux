import * as firebase from 'firebase';

// Optionally import the services that you want to use
import 'firebase/auth';
// import "firebase/database";
import 'firebase/firestore';
// import "firebase/functions";
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyACT5PT5xo1Zv-5VZXym66dpYU5ruoM_jc',
  authDomain: 'lohas-cocktail-recipes.firebaseapp.com',
  databaseURL: 'https://lohas-cocktail-recipes.firebaseio.com',
  projectId: 'lohas-cocktail-recipes',
  storageBucket: 'gs://lohas-cocktail-recipes.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);
