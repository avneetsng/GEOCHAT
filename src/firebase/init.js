import firebase from 'firebase';
// import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCOLpYYcG0-rTS49v_43jst4UKa1HUV7N0",
    authDomain: "geochatavneetsng.firebaseapp.com",
    databaseURL: "https://geochatavneetsng.firebaseio.com",
    projectId: "geochatavneetsng",
    storageBucket: "geochatavneetsng.appspot.com",
    messagingSenderId: "614953809076",
    appId: "1:614953809076:web:2ccf38900112441c"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()