const form = document.getElementById("login");
const room = document.getElementById("create_room");

form.addEventListener("submit", function (event) {
   event.preventDefault();
   var username = document.getElementById("username").value;
    console.log(`  ~ username`, username)
    form.setAttribute('hidden',true)
    room.removeAttribute('hidden')
});
