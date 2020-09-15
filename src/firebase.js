import * as firebase from "firebase/app";   //Tuodaan firebase 
import "firebase/firestore";
import  "firebase/auth";

  var firebaseConfig = {                //Kytketään firebase projekt ohjelmaan
    apiKey: "AIzaSyB2y0Tqwf1oZcEfCUX-TX-fq1fAdxKVPPI",
    authDomain: "fffishingfriend.firebaseapp.com",
    databaseURL: "https://fffishingfriend.firebaseio.com",
    projectId: "fffishingfriend",
    storageBucket: "fffishingfriend.appspot.com",
    messagingSenderId: "164412175200",
    appId: "1:164412175200:web:77ae6fff8bc670fc57e405"
  };

  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider(); //Otetaan käyttöön Google provaideri
  export const auth = firebase.auth();              //Toiminnallisuus autentikointiin

  export default firebase;


