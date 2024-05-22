

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCTp5Fsx9E38kJdA3EEEeqpG9b-2DbX7_Q",
  authDomain: "demoauth-9054c.firebaseapp.com",
  projectId: "demoauth-9054c",
  storageBucket: "demoauth-9054c.appspot.com",
  messagingSenderId: "961080862313",
  appId: "1:961080862313:web:af33a8be9e88253ac7e4f8",
  measurementId: "G-NV5H74HBNJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore(app);


// SIGN -UP FUNCTION's

function create() {
  
let email = document.getElementById("email").value
let password = document.getElementById("password").value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  console.log("You are succesfully Sign_up");
  console.log(user);
  alert("You are succesfully Sign_up")
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  alert("Sign_up failed")

  // ..
});


// // STORAGE BLOCK 

// const storageRef = ref(storage, email);
// // dec the storage name for the input img!!!
// // And print the snapshot is important....

// uploadBytes(storageRef, file)
// .then((snapshot) => {
//   console.log("File Uploaded succesfully");
//   console.log(snapshot);
// })
// .catch((error) => {
//   console.log(error);
// });
 
// // FIRE DATABASE BLOCK

// // assign the buget/collection name !!!

//   addDoc(collection (db, "demoUser" ), {
//   mobileNumber : userMob,
//   dateOfBirth :  userDob
// });

}
module.create=create

// SIGN-IN FUNCTION's

function signin() {

  let email =document.getElementById("email").value
  let password = document.getElementById("password").value

  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log("You are Signed-in succesfully");
  console.log(user);
  alert("You logged-In succesfully")
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log("Invalied user or passwod");
  console.log(errorMessage);
  alert("User log_in failed")
});
}
module.signin=signin


