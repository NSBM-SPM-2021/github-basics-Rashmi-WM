import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAKQlXxoNp_6lAJaR4of1vCal2XELrTZQU",
  authDomain: "spm2021-64cee.firebaseapp.com",
  databaseURL: "https://spm2021-64cee-default-rtdb.firebaseio.com",
  projectId: "spm2021-64cee",
  storageBucket: "spm2021-64cee.appspot.com",
  messagingSenderId: "121172586358",
  appId: "1:121172586358:web:58f160693e5710a8609457"
});

var db = firebaseApp.firestore();

export {db};
