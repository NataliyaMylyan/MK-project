console.log("Hello New Project");
// console.log("Hello New Project");
// Task #0
const player1 = {
  name: "Subzero",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["shotgun", "spear", "bow", "sword", "rifle", "axe"],
  attack() {
    console.log("player1" + "fight");
  },
};

// console.log(player1);

const player2 = {
  name: "Scorpion",
  hp: 40,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["shotgun", "bow", "sword", "rifle", "axe"],
  attack() {
    console.log("player2" + "fight");
  },
};
// console.log(player2);

// Task #1 + #2
// const arenas = document.querySelector(".arenas");
// function createPlayer(playerNumber, playerName, playerHp) {
//   // const root = document.querySelector(".root");

//   const player = document.createElement("div");
//   player.classList.add(playerNumber);

//   const progressBar = document.createElement("div");
//   progressBar.classList.add("progressbar");

//   const life = document.createElement("div");
//   life.classList.add("life");
//   life.style.width = playerHp + "%";

//   const name = document.createElement("div");
//   name.classList.add("name");
//   name.innerText = playerName;

//   const character = document.createElement("div");
//   character.classList.add("character");

//   const img = document.createElement("img");
//   img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";

//   arenas.appendChild(player);
//   player.appendChild(progressBar);
//   player.appendChild(character);
//   progressBar.appendChild(life);
//   progressBar.appendChild(name);
//   character.appendChild(img);

// }

// createPlayer("player1", "SCORPION", 50);
// createPlayer("player2", "SUB-ZERO", 80);

// Task #3
const arenas = document.querySelector(".arenas");
function createPlayer(playerNumber, playerName) {
  // const root = document.querySelector(".root");

  const player = document.createElement("div");
  player.classList.add(playerNumber);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progressbar");

  const life = document.createElement("div");
  life.classList.add("life");
  life.style.width = playerName.hp + "%";

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerText = playerName.name;

  const character = document.createElement("div");
  character.classList.add("character");

  const img = document.createElement("img");
  img.src = playerName.img;

  arenas.appendChild(player);
  player.appendChild(progressBar);
  player.appendChild(character);
  progressBar.appendChild(life);
  progressBar.appendChild(name);
  character.appendChild(img);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
