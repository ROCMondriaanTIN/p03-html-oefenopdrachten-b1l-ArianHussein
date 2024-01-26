const animes = [
  { title: "Jujutsu Kaisen", characters: "Itadori Yuji" },
  { title: "Tokyo Ghoul", characters: "Kaneki" },
  { title: "Naruto Shippuden", characters: "Itachi Uchiha" },
  { title: "Blue Lock", characters: "Nagi" },
];

const card = document.querySelector(".card");

function createcardWithpurplecolor(title, characters) {
  let cardHTML = `
    <div class="card">
    <h2>${title}</h2>
    <p>${characters}</p>
    <button>Koop nu </button>
</div>
    `;

  return cardHTML;
}

const cards = document.querySelector(".cards-container");

for (let i = 0; i < animes.length; i++) {
  const anime = animes[i];

  cards.innerHTML += createcardWithpurplecolor(anime.title, anime.characters);
}


