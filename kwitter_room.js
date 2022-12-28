
const firebaseConfig = {
      apiKey: "AIzaSyDj6vgsn9T_A2JPASxCWgxEKb0p7j6X1Ds",
      authDomain: "letschat-fa8c1.firebaseapp.com",
      databaseURL: "https://letschat-fa8c1-default-rtdb.firebaseio.com",
      projectId: "letschat-fa8c1",
      storageBucket: "letschat-fa8c1.appspot.com",
      messagingSenderId: "513725214449",
      appId: "1:513725214449:web:c563aac5338deff6690350"   
    };
    
  
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
