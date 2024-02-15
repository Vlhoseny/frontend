// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBazd1IhuPrtyWxE3bgt8uaVLisuWmaKRA",
  authDomain: "hire-me-6ab8c.firebaseapp.com",
  databaseURL: "https://hire-me-6ab8c-default-rtdb.firebaseio.com",
  projectId: "hire-me-6ab8c",
  storageBucket: "hire-me-6ab8c.appspot.com",
  messagingSenderId: "622901167486",
  appId: "1:622901167486:web:6c596a7a5058ed502d9f2f",
  measurementId: "G-60M96Y3699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ----------------------------------------------------
const regbtn = document.getElementById("reg")

const handleRegister = () => {
  regbtn.addEventListener('click', async(e) => {
    console.log('Welcome, ',  document.getElementById('fname').value, document.getElementById('lname').value,document.getElementById('email').value,  document.getElementById('age').value,document.getElementById('pass').value,  document.getElementById('cpass').value)
    createUserWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('pass').value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  })
}

handleRegister()
