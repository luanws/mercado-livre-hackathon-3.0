import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBFMzQMzDa3OO7-C8d6fU0tNxxHJKzq2jE',
  authDomain: 'mercado-livre-hackathon-3-0.firebaseapp.com',
  databaseURL: 'https://mercado-livre-hackathon-3-0.firebaseio.com',
  projectId: 'mercado-livre-hackathon-3-0',
  storageBucket: 'mercado-livre-hackathon-3-0.appspot.com',
  messagingSenderId: '1039196715335',
  appId: '1:1039196715335:web:1a80b759230a0aea727462',
  measurementId: 'G-HFDDEBX8PL',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
