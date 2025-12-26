let roles = [];
let currentPlayer = 0;

const words = [
  // Rock internacional
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

function startGame() {
  const players = parseInt(document.getElementById("players").value);

  if (!players || players < 2) {
    alert("Cantidad de jugadores inválida");
    return;
  }

  const chosenWord = words[Math.floor(Math.random() * words.length)];
  const impostorIndex = Math.floor(Math.random() * players);

  roles = Array(players).fill(chosenWord);
  roles[impostorIndex] = "IMPOSTOR";

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  updatePlayer();
}

function updatePlayer() {
  document.getElementById("playerNumber").textContent = currentPlayer + 1;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
}

function reveal() {
  document.getElementById("result").textContent = roles[currentPlayer];
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
}

function nextPlayer() {
  currentPlayer++;

  if (currentPlayer >= roles.length) {
    alert("Todos listos. ¡A jugar!");
    location.reload();
  } else {
    updatePlayer();
  }
}
