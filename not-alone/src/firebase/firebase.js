import * as firebase from 'firebase';

const config = {
  "apiKey": "AIzaSyAjvnZbFYBgHxxWpuzdmlmaCMvNW1jGdaA",
  "databaseURL": "https://not-alone-solution.firebaseio.com",
  "storageBucket": "not-alone-solution.appspot.com",
  "authDomain": "not-alone-solution.firebaseapp.com",
  "messagingSenderId": "982632196723",
  "projectId": "not-alone-solution"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
