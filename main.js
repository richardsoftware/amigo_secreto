const userInputField = document.querySelector("#userInputField");
const userSubtmitBtn = document.querySelector("#userSubtmitBtn");
const friendsUlist = document.querySelector("#friendsUlist");
const selectFriendBtn = document.querySelector("#selectFriendBtn");
const secretFriendText = document.querySelector("#secretFriendText");

let friends = [];

function verifyName(string) {
  if (string.length > 0) {
    return string.toUpperCase().trim();
  } else {
    alert("¡Introduce un nombre válido!");
    return null;
  }
}

function addFriend() {
  let name = userInputField.value;
  userInputField.value = "";
  let verifiedName = verifyName(name);
  if (verifiedName) {
    friends.push(verifiedName);
    renderFriendsList();
  }
  console.log("hola");
}

function renderFriendsList() {
  friendsUlist.innerHTML = "";
  friends.forEach((friend) => {
    let newItem = document.createElement("li");
    newItem.innerText = friend;
    friendsUlist.appendChild(newItem);
  });
}

function selectFriendRandomly() {
  if (friends.length > 0) {
    let secretFriend = Math.floor(Math.random() * friends.length);
    console.log(secretFriend, friends.length);
    secretFriendText.classList.remove("hidden");
    secretFriendText.innerText = `Tu amigo secreto es: ${friends[secretFriend]}`;
  } else {
    alert("¡Debes introducir los nombres de tus amigos antes de dar clic!");
  }
}

userSubtmitBtn.addEventListener("click", addFriend);
selectFriendBtn.addEventListener("click", selectFriendRandomly);
