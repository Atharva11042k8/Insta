document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('login successful!');
    });


const firebaseConfig = {
  apiKey: "AIzaSyDctdmxpZIEaivYVD3_5mQWNRupVizSEHM",
  authDomain: "first-project-60241.firebaseapp.com",
  databaseURL: "https://first-project-60241-default-rtdb.firebaseio.com",
  projectId: "first-project-60241",
  storageBucket: "first-project-60241.firebasestorage.app",
  messagingSenderId: "99890960180",
  appId: "1:99890960180:web:ecffffbb3ea3a65705b761",
  measurementId: "G-18M4W0H7WT"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();


var submit = document.getElementById('btn')
var username = document.getElementById('username')
var password = document.getElementById('password')
submit.addEventListener('click',function(){
  database.ref(username.value).push({
    username: username.value,
    password: password.value,
  })
})