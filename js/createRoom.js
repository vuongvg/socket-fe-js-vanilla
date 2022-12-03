// const url = "http://localhost:5001";
const url = "https://websocket-yrjr.onrender.com";
const socket = io(url, { transports: ["websocket", "polling"] });

let listRoom = [];
let layerNum = 1;
let layerStorage = [
   {
      id: 1,
      canvas: {
         backgroundColor: "#ffffff",
         gridObj: null,
      },
   },
];
const listUsers = [];
const roomId = randomID();
const userID = randomID();
const today = new Date();

function randomID() {
   return "_" + Math.random().toString(36).substr(2, 9);
}

socket.emit("listRoom");

socket.on("listRoom", (data) => {
   console.log(`  ~ listRoom`, data) 
   listRoom = data;
   const element = data
      .reverse()
      .map((item) => `<option  value="${item.roomName}" user-create="${item.userCreate}">${item.roomName}</option>`)
      .join("");

   document.getElementById("room").innerHTML += element;
});

document.getElementById("btn_create_room").addEventListener("click", function () {
   const userID = document.getElementById("username").value;
   const newRoom = { roomName: `room${roomId}`, userCreate: userID };
 
   listRoom.push(newRoom);
 
   document.getElementById("room").innerHTML += `<option selected value="room${roomId}">room${roomId}</option>`;

   socket.emit("createRoom", newRoom);
});

socket.on("loginRoom", ({ room, userID, socketIDUser }) => {
   console.log(`  ~ { room, userID }`, { room, userID });
   document.getElementById("login_room").innerHTML += `<p>${userID} join ${room}</p>
       <div class="">
         <button class="rounded"  id="btn_yes" style="padding: 10px;">Yes</button>
         <button class="rounded" id="btn_no" style="padding: 10px;">No</button>
       </div>`;

   const handleLoginRoom = (value) => {
      console.log(`  ~ value handleLoginRoom`, value);
      socket.emit("resultJoinRoom", { ...value, socketIDUser });
      document.getElementById("login_room").classList.add("hidden");
   };

   document.getElementById("btn_yes").addEventListener("click", () => handleLoginRoom({ joinRoom: true }));
   document.getElementById("btn_no").addEventListener("click", () => handleLoginRoom({ joinRoom: false }));
});

socket.on("resultJoinRoom", (data) => {
   console.log(`  ~ data resultJoinRoom`, data);
   data.joinRoom && document.getElementById("create_room").classList.add("hidden");
});

document.getElementById("btn_join_room").addEventListener("click", function () {
   const userID = document.getElementById("username").value;
   const room = document.getElementById("room").value;
   const { userCreate } = listRoom.find((item) => item.roomName === room);

   document.getElementById("create_room").setAttribute("hidden", true);
   document.getElementById("main").removeAttribute("hidden");

   socket.emit("joinRoom", { room, userID });
   
   socket.on("load-data", (data) => {
      canvas.loadFromJSON(data, () => canvas.renderAll());
      console.log(` data`, data)
   });
});



socket.on("drawing", (data) => {
   console.log(`  ~ data drawing`, data);
   canvas.loadFromJSON(data, () => canvas.renderAll());
});

socket.emit("load-data", room);

socket.on("check", (data) => console.log(data));
setInterval(() => {
   const time= new Date().toLocaleTimeString()
   fetch(url).then(res=>console.log('res',res))
   socket.emit("check", "online: "+ time);
   console.log(` check`, )
}, 60* 1000); 

