import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCMCQoYco3fSNqqXo93eGXP6f86q-ELvHY",
  authDomain: "otp-app-c22a8.firebaseapp.com",
  projectId: "otp-app-c22a8",
  storageBucket: "otp-app-c22a8.appspot.com",
  messagingSenderId: "232169471738",
  appId: "1:232169471738:web:a7355d9d49efc86d0b5343",
  measurementId: "G-X0BJMXZ330"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
