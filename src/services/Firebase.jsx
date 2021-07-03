import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvhCQgyH0S7oXT0MucjnkIggKB9jqmr9o",
    authDomain: "localmart-d56e2.firebaseapp.com",
    databaseURL: "https://localmart-d56e2.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();