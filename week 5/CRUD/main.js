// Firebase App + Realtime Database Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  push
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase Connected");


// ======================================================
// CREATE USER
// ======================================================

function writeUserData(name, email) {

  // Reference to users collection
  const usersRef = ref(db, "users");

  // Generate unique ID
  const newUserRef = push(usersRef);

  // Save data
  set(newUserRef, {
    name: name,
    email: email
  })
  .then(() => {
    console.log("User added successfully");
  })
  .catch((error) => {
    console.error("Error adding user:", error);
  });
}

window.writeUserData = writeUserData;


// Example:
// writeUserData("Sudeep", "sudeep@gmail.com");



// ======================================================
// READ ALL USERS
// ======================================================

function readUsers() {

  const usersRef = ref(db, "users");

  get(usersRef)
    .then((snapshot) => {

      if (snapshot.exists()) {

        snapshot.forEach((childSnapshot) => {

          console.log(childSnapshot.key);
          console.log(childSnapshot.val());

        });

      } else {
        console.log("No users found");
      }

    })
    .catch((error) => {
      console.error("Error reading users:", error);
    });
}

window.readUsers = readUsers;


// ======================================================
// READ SINGLE USER BY ID
// ======================================================

function readUserById(userId) {

  const userRef = ref(db, "users/" + userId);

  get(userRef)
    .then((snapshot) => {

      if (snapshot.exists()) {

        const user = snapshot.val();

        console.log("User Found:", user);

        document.getElementById("read-result").textContent =
          "Name: " + user.name + " | Email: " + user.email;

      } else {

        document.getElementById("read-result").textContent =
          "User not found";

      }

    })
    .catch((error) => {
      console.error("Error reading user:", error);
    });
}

window.readUserById = readUserById;



// ======================================================
// FETCH USER DATA FOR UPDATE
// ======================================================

function fetchUserForUpdate(userId) {

  const userRef = ref(db, "users/" + userId);

  get(userRef)
    .then((snapshot) => {

      if (snapshot.exists()) {

        const user = snapshot.val();

        document.getElementById("update-name").value = user.name;
        document.getElementById("update-email").value = user.email;

        console.log("User loaded into form");

      } else {
        console.log("User not found");
      }

    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
}

window.fetchUserForUpdate = fetchUserForUpdate;



// ======================================================
// UPDATE USER
// ======================================================

function updateUserData(userId, updatedName, updatedEmail) {

  const userRef = ref(db, "users/" + userId);

  update(userRef, {
    name: updatedName,
    email: updatedEmail
  })
  .then(() => {
    console.log("User updated successfully");
  })
  .catch((error) => {
    console.error("Error updating user:", error);
  });
}

window.updateUserData = updateUserData;


// Example:
// updateUserData("USER_ID", "New Name", "new@gmail.com");



// ======================================================
// DELETE USER
// ======================================================

function deleteUserData(userId) {

  const userRef = ref(db, "users/" + userId);

  remove(userRef)
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

window.deleteUserData = deleteUserData;


// Example:
// deleteUserData("USER_ID");