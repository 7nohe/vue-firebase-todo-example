import firebase from "firebase";

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: process.env.VUE_APP_FIREBASE_API_KEY,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.VUE_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(config);

export default firebase;
