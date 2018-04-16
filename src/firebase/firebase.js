import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAUi82cHuHWwEh9Aw2YpdIcz4Nvsy4hbqI",
  authDomain: "expensify-5d3c4.firebaseapp.com",
  databaseURL: "https://expensify-5d3c4.firebaseio.com",
  projectId: "expensify-5d3c4",
  storageBucket: "expensify-5d3c4.appspot.com",
  messagingSenderId: "790160790920"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};
