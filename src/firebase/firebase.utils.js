import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyD0fGAU2HtZS7VA0_1ExDp0UkF3zGTvLvQ",
  authDomain: "crwn-db00.firebaseapp.com",
  projectId: "crwn-db00",
  storageBucket: "crwn-db00.appspot.com",
  messagingSenderId: "976183073272",
  appId: "1:976183073272:web:65fdc358cf25734f6d5e0d",
  measurementId: "G-STZG5CTJRS"
};


export const createUserProfileDocument = async ( userAuth, additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();



if(!snapShot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
await userRef.set({
     displayName,
     email,
     createdAt,
     ...additionalData
})

  } catch (error){
console.log('error creating user', error.message);
  }
}
return userRef
};





  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;