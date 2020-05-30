import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD-undlG6R1i7TGP14UHqCBtv3YqxKQ62U",
    authDomain: "smoothies-db3b7.firebaseapp.com",
    databaseURL: "https://smoothies-db3b7.firebaseio.com",
    projectId: "smoothies-db3b7",
    storageBucket: "smoothies-db3b7.appspot.com",
    messagingSenderId: "902984865859",
    appId: "1:902984865859:web:9b77dda987f16647881cf6",
    measurementId: "G-TK6X83E5RQ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 


// export firstore database

export default firebaseApp.firestore()
