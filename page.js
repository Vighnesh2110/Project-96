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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = "";
}



function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      console.log(firebase_message_id)
                      //End code
                }
          });
    });
}
getData();
