import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCkgymAguihL-gg7Uc7YsMRnzlL-4vv7OM",
  authDomain: "spirit-animal-3f492.firebaseapp.com",
  databaseURL: "https://spirit-animal-3f492.firebaseio.com",
  projectId: "spirit-animal-3f492",
  storageBucket: "spirit-animal-3f492.appspot.com",
  messagingSenderId: "618263665124"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
