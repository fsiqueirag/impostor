let roles = [];
let currentPlayer = 0;
let usedWords = [];
let numberOfPlayers = 0;
let isNewRound = false;

const words = [
  "The Beatles",
  "The Rolling Stones",
  "Led Zeppelin",
  "Pink Floyd",
  "Queen",
  "Nirvana",
  "Metallica",
  "AC/DC",
  "Guns N’ Roses",
  "Black Sabbath",
  "The Doors",
  "Radiohead",
  "Red Hot Chili Peppers",
  "Green Day",
  "The Strokes",
  "Muse",
  "Linkin Park",
  "Deep Purple",
  "Iron Maiden",
  "Pearl Jam",
  "Soundgarden",
  "David Bowie",
  "Bob Dylan",
  "Jimi Hendrix",
  "Elvis Presley",
  "Freddie Mercury",
  "Paul McCartney",
  "John Lennon",
  "Eric Clapton",
  "Prince",
  "Michael Jackson",
  "Madonna",
  "U2",
  "Sting",
  "Phil Collins",
  "Soda Stereo",
  "Gustavo Cerati",
  "Charly García",
  "Luis Alberto Spinetta",
  "Fito Páez",
  "Patricio Rey y sus Redonditos de Ricota",
  "Indio Solari",
  "La Renga",
  "Divididos",
  "Serú Girán",
  "Sui Generis",
  "Los Abuelos de la Nada",
  "Almendra",
  "Pescado Rabioso",
  "Vox Dei",
  "Manal",
  "Babasónicos",
  "Ratones Paranoicos",
  "Attaque 77",
  "Virus",
  "Las Pelotas",
  "Bersuit Vergarabat",
  "Sumo",
  "Wolfgang Amadeus Mozart",
  "Ludwig van Beethoven",
  "Johann Sebastian Bach",
  "Antonio Vivaldi",
  "Frédéric Chopin",
  "Pyotr Ilyich Tchaikovsky",
  "Giuseppe Verdi",
  "Richard Wagner",
  "Louis Armstrong",
  "Miles Davis",
  "John Coltrane",
  "Ray Charles",
  "B.B. King",
  "Bob Marley",
  "The Beach Boys",
  "The Who",
  "Coldplay",
  "Foo Fighters",
  "Oasis",
  "Adele",
  "Taylor Swift",
  "Daft Punk"
];

function getRandomUnusedWord() {
  if (usedWords.length >= words.length) {
    usedWords = [];
  }

  const availableWords = words.filter(word => !usedWords.includes(word));
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  const chosenWord = availableWords[randomIndex];
  
  usedWords.push(chosenWord);
  return chosenWord;
}

function startGame(players = null) {
  if (players === null) {
    players = parseInt(document.getElementById("players").value);
  }

  if (!players || players < 2) {
    alert("Cantidad de jugadores inválida");
    return;
  }

  numberOfPlayers = players;
  currentPlayer = 0;
  isWordRevealed = false;
  isNewRound = false;

  const chosenWord = getRandomUnusedWord();
  const impostorIndex = Math.floor(Math.random() * players);

  roles = Array(players).fill(chosenWord);
  roles[impostorIndex] = "IMPOSTOR";

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  updatePlayer();
}

let isWordRevealed = false;

function updatePlayer() {
  document.getElementById("playerNumber").textContent = currentPlayer + 1;
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.classList.remove("impostor");
  isWordRevealed = false;
  updateActionButton();
}

function updateActionButton() {
  const actionBtn = document.getElementById("actionBtn");
  if (isNewRound) {
    actionBtn.textContent = "Nueva Ronda";
    actionBtn.classList.add("new-round");
  } else if (isWordRevealed) {
    actionBtn.textContent = "Siguiente jugador";
    actionBtn.classList.remove("new-round");
  } else {
    actionBtn.textContent = "Ver palabra";
    actionBtn.classList.remove("new-round");
  }
}

function handleAction() {
  if (isNewRound) {
    startGame(numberOfPlayers);
  } else if (isWordRevealed) {
    nextPlayer();
  } else {
    reveal();
  }
}

function reveal() {
  const resultElement = document.getElementById("result");
  const role = roles[currentPlayer];
  
  resultElement.textContent = role;
  
  if (role === "IMPOSTOR") {
    resultElement.classList.add("impostor");
  } else {
    resultElement.classList.remove("impostor");
  }
  
  isWordRevealed = true;
  updateActionButton();
}

function nextPlayer() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";
  resultElement.classList.remove("impostor");
  
  currentPlayer++;

  if (currentPlayer >= roles.length) {
    isNewRound = true;
    isWordRevealed = false;
    updateActionButton();
  } else {
    updatePlayer();
  }
}
