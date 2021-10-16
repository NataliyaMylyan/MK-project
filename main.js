const arenas = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["shotgun", "spear", "bow", "sword", "rifle", "axe"],
  attack() {
    console.log("player1" + "fight");
  },
};

const player2 = {
  player: 2,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["shotgun", "bow", "sword", "rifle", "axe"],
  attack() {
    console.log("player2" + "fight");
  },
};

function createElement(tagName, className) {
  const tag = document.createElement(tagName);
  if (className) {
    tag.classList.add(className);
  }
  return tag;
}

function createPlayer(playerObj) {
  const player = createElement("div", "player" + playerObj.player);
  const progressBar = createElement("div", "progressbar");
  const life = createElement("div", "life");
  const name = createElement("div", "name");
  const character = createElement("div", "character");
  const img = createElement("img");

  life.style.width = playerObj.hp + "%";
  name.innerText = playerObj.name;
  img.src = playerObj.img;

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  character.appendChild(img);

  player.appendChild(progressBar);
  player.appendChild(character);

  return player;
}

function changeHP(playerX) {
  const playerLife = document.querySelector(
    ".player" + playerX.player + " .life"
  );

  function randomize(num) {
    const number = Math.floor(Math.random(num) * 10);
    playerX.hp -= number;
    console.log(playerX);
  }

  randomize(playerX.hp);
  playerLife.style.width = playerX.hp + "%";

  // if (player.hp < 0) {
  //   arenas.appendChild(playerLose(player.name));
  // }

  if (playerX.hp <= 0) {
    if (playerX.player === 1) {
      arenas.appendChild(playerWins(player2.name));
    } else {
      arenas.appendChild(playerWins(player1.name));
    }
    playerX.hp = 0;
    randomButton.disabled = true;
  }
}

// function playerLose(name) {
//   console.log(name);
//   const loseTitle = createElement("div", "loseTitle");
//   loseTitle.innerText = name + " lose";

//   return loseTitle;
// }

function playerWins(name) {
  const winTitle = createElement("div", "winTitle");
  winTitle.innerText = name + " wins";

  return winTitle;
}

randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
