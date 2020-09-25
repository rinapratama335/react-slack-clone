import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBNrQ4poYmP-CtbkcoVPxbSErniDK5FhV0",
  authDomain: "react-slack-clone-6b062.firebaseapp.com",
  databaseURL: "https://react-slack-clone-6b062.firebaseio.com",
  projectId: "react-slack-clone-6b062",
  storageBucket: "react-slack-clone-6b062.appspot.com",
  messagingSenderId: "667569637117",
  appId: "1:667569637117:web:dd18ce2500fd491fa5e094",
  measurementId: "G-QFLS6YGZ2Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
