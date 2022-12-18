
const firebaseConfig = {
      apiKey: "AIzaSyBrYE9a_yjyAigvftHk8t-XgkQKkQLBkjg",
      authDomain: "kwitter-app-49f83.firebaseapp.com",
      databaseURL: "https://kwitter-app-49f83-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-49f83",
      storageBucket: "kwitter-app-49f83.appspot.com",
      messagingSenderId: "796111641647",
      appId: "1:796111641647:web:e0851a532d60d5c19b7ada"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
