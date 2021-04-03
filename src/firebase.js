import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsGPqBAOarNiuUDFZoB2Bjcedmzw0174I",
    authDomain: "netflix-react-clone-e0645.firebaseapp.com",
    projectId: "netflix-react-clone-e0645",
    storageBucket: "netflix-react-clone-e0645.appspot.com",
    messagingSenderId: "438436959251",
    appId: "1:438436959251:web:8f45037f4233fca5ccdbe6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;