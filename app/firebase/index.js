import firebase from 'firebase';

try{
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBuTgRAkz0ZSB-DsmaoUPpN0M_dZxqcCTg",
      authDomain: "dulip-todo-app.firebaseapp.com",
      databaseURL: "https://dulip-todo-app.firebaseio.com",
      storageBucket: "dulip-todo-app.appspot.com",
      messagingSenderId: "869961860968"
    };
    firebase.initializeApp(config);

}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
