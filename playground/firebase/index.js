import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuTgRAkz0ZSB-DsmaoUPpN0M_dZxqcCTg",
    authDomain: "dulip-todo-app.firebaseapp.com",
    databaseURL: "https://dulip-todo-app.firebaseio.com",
    storageBucket: "dulip-todo-app.appspot.com",
    messagingSenderId: "869961860968"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0'
    },
    isRunning: true,
    user: {
      name: 'dulip',
      age: 32
    }
  }).then((res)=>{
    console.log("Success");
  }, (e)=>{
    console.log("error");
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('Child Added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'take a walk'
  });

  todosRef.push({
    text: 'play games'
  });

  // var notesRef = firebaseRef.child('notes');
  //
  // var newNotesRef = notesRef.push();
  //
  // newNotesRef.set({
  //   text: 'do something'
  // })
  // firebaseRef.child('user').on('value', (snapshot) => {
  //   console.log("Log", snapshot.val());
  // });
  //
  // firebaseRef.update({
  //   'user/name': 'Mike'
  // });
  //
  // firebaseRef.update({
  //   'app/name': 'Todo App React'
  // });

  //this runs only once
  // firebaseRef.child('app').once('value').then( (snapshot) => {
  //   console.log('Snapshot', snapshot.val());
  // }, (e) => {
  //   console.log('error', e);
  // });

  //runs each time it gets updated
  // firebaseRef.on('value', (snapshot) => {
  //   console.log('Got value', snapshot.val());
  // });
  //
  // firebaseRef.update({
  //   isRunning: false
  // })

  // firebaseRef.set({
  //   appName: 'Todo Application',
  // });

  // firebaseRef.child('isRunning').set(false);

  // firebaseRef.child('app').set({
  //   name: 'React Todo'
  // });

  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name' : 'Todo Application'
  // });

  // firebaseRef.update({
  //   'app/name' : 'React Todo',
  //   'user/name' : 'Kodi'
  // })
  //
  // firebaseRef.child('app').update({
  //   name: 'React Test App'
  // });
  //
  // // firebaseRef.child('app/name').remove();
  // firebaseRef.child('app').update({
  //   name: null,
  //   version: '2.0.0'
  // });
