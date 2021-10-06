var firebaseConfig = {
      apiKey: "AIzaSyDCchAbcjJMR5waQDsPuvkL1hbXF5lPMwc",
      authDomain: "kwitter-ee3a8.firebaseapp.com",
      databaseURL: "https://kwitter-ee3a8-default-rtdb.firebaseio.com/",
      projectId: "kwitter-ee3a8",
      storageBucket: "kwitter-ee3a8.appspot.com",
      messagingSenderId: "1087727871855",
      appId: "1:1087727871855:web:fe6c41e9d4a2bdf9daea9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "page.html";
}