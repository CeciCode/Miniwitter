const firebaseConfig = {
  apiKey: "AIzaSyAJfqY3AyF-m4nkvlOqj10DIgBTcQdkBkQ",
  authDomain: "projeto-94-afd1d.firebaseapp.com",
  databaseURL: "https://projeto-94-afd1d-default-rtdb.firebaseio.com",
  projectId: "projeto-94-afd1d",
  storageBucket: "projeto-94-afd1d.appspot.com",
  messagingSenderId: "346725976142",
  appId: "1:346725976142:web:cceacb5aaa6a6257829b1f"
};
firebase.initializeApp(firebaseConfig);
userName= localStorage.getItem("user_name");
document.getElementById("userName").innerHTML= "Hello, " + userName + "!";
function addRoom() {
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location= "kwitterPage.html";
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    room_names = childKey;
    console.log("Nome da Sala - " + room_names);
    row = "<div class='roomName' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
 });
  });

}

getData();

function redirectToRoomName(name)
{
   localStorage.setItem("room_name", name);
   window.location= "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}