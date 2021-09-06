import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBwYqnRTlLqthR5wIgQkrNHjwprTOpTKpM",
    authDomain: "react-contact-app-28f96.firebaseapp.com",
    projectId: "react-contact-app-28f96",
    storageBucket: "react-contact-app-28f96.appspot.com",
    messagingSenderId: "104524223909",
    appId: "1:104524223909:web:145bee688c6c871e8b444c"
});

var db = firebaseApp.firestore();

export {db};
