import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyCIhkTMyOTc6mnyii-I_0kER7WktLwygHo',
   authDomain: 'crown-db-17fda.firebaseapp.com',
   databaseURL: 'https://crown-db-17fda.firebaseio.com',
   projectId: 'crown-db-17fda',
   storageBucket: 'crown-db-17fda.appspot.com',
   messagingSenderId: '16461913693',
   appId: '1:16461913693:web:01d46c6e94bfdb90b177b4',
   measurementId: 'G-T0D8QJ55NE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
