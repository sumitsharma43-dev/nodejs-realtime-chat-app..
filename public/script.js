const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

const usernameInput = document.getElementById("username");
const joinBtn = document.getElementById("joinBtn");

let username = "";

joinBtn.addEventListener("click", () => {
  username = usernameInput.value;

  if (username.trim() !== "") {
    document.getElementById("username-container").style.display = "none";
    form.style.display = "flex";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (input.value) {
    socket.emit("chat message", {
      user: username,
      text: input.value
    });

    input.value = "";
  }
});

socket.on("chat message", function(msg) {
  const item = document.createElement("li");
  item.textContent = msg.user + ": " + msg.text;
  messages.appendChild(item);
});
