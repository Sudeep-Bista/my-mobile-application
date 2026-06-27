
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


firebase.initializeApp(firebaseConfig);
const db = firebase.database();

console.log("Firebase connected:", firebase.app().name);

function submitForm() {
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  const contactData = {
    name:      name,
    email:     email,
    phone:     phone,
    timestamp: Date.now()
  };

  db.ref("contacts").push(contactData)
    .then(() => {
      console.log(" Data saved to Firebase!");
      document.getElementById("msg").style.display    = "block";
      document.getElementById("errMsg").style.display = "none";
      // Clear fields
      document.getElementById("name").value  = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
    })
    .catch((error) => {
      console.error(" Firebase error:", error);
      document.getElementById("errMsg").style.display = "block";
      document.getElementById("msg").style.display    = "none";
    });
}