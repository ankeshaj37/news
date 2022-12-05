import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvhvzgwnskV2YEgH9xpCeJMMuXuQvLLNI",
  authDomain: "news-16a79.firebaseapp.com",
  projectId: "news-16a79",
  storageBucket: "news-16a79.appspot.com",
  messagingSenderId: "201884703953",
  appId: "1:201884703953:web:44a2675a497249e6bab9f0",
  measurementId: "G-9HZFES8GWJ"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth()
export {db,auth}