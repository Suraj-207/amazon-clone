import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6cdEvv6_qGmTiRKnaolH5rXxAA9DOQjM",
    authDomain: "clone-5aeb3.firebaseapp.com",
    projectId: "clone-5aeb3",
    storageBucket: "clone-5aeb3.appspot.com",
    messagingSenderId: "786141669110",
    appId: "1:786141669110:web:526a89c7665a63a6f92ed7",
    measurementId: "G-2ZZR0LHWHL"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};