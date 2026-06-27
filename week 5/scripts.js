  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove } 
from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// initializeApp – to initialize your Firebase app.
// getDatabase – to get a reference to the Firebase Realtime Database.
// set – to write data to the database.
// get – to read data from the database.
// ref – to create references (paths) in the database.


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09dlEWNW3CwfJD6VXZryeiiBkcTxzDz8",
  authDomain: "myfirebase-e2a7b.firebaseapp.com",
  databaseURL: "https://myfirebase-e2a7b-default-rtdb.firebaseio.com",
  projectId: "myfirebase-e2a7b",
  storageBucket: "myfirebase-e2a7b.firebasestorage.app",
  messagingSenderId: "336272209432",
  appId: "1:336272209432:web:c5c0daa168a9618776356d",
  measurementId: "G-H4V6LB7KPJ"
};

// Initialize Firebase
// initializeApp(firebaseConfig) initializes your Firebase application using the config.
// getDatabase(app) gets the Realtime Database instance connected to your Firebase project.
const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

console.log(db)




//Function to write user data to Firebase Realtime Database
function writeUserData(userId, firstname, lastname) {
    // Get the database instance
    const db = getDatabase(app);
  
    // Create a reference/points to 'users/{userId}' and set the data (name and email)
 set(ref(db, 'users/' + userId), {
      firstname: firstname,      
      lastname: lastname,
      
    });
  }
writeUserData(6, "Gitesh ", "KC")


function readUser(){
    const userRef = ref(db,'users')

    get(userRef).then((snapshot)=>{
        snapshot.forEach((childsnapshot)=>{
            console.log(childsnapshot.val());
        })
    })
}
readUser(6);


function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'users/' + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}
// Example usage:
updateUserData(1, {firstname: "Sudeep", lastname: "Bista"});




function deleteUserData(userId) {
  const userRef = ref(db, 'users/' + userId);
  remove(userRef)
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

// // // // // // // // Example usage:
deleteUserData(5);

console.log("Added! Good")