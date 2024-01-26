const animes = [
  { title: "Jujutsu Kaisen", characters: "Itadori Yuji" },
  { title: "Tokyo Ghoul", characters: "Kaneki" },
  { title: "Naruto Shippuden", characters: "Itachi Uchiha" },
  { title: "Blue Lock", characters: "Nagi" },
];


const projects = [
    { title: "hoger lager",
     description: "dit is mijn project",
      img:"img/sukuna.jpg"
    },

    { title: "Escape Room",
     characters: "Project escape room",
      img:"img/kaneki.jpg"
     },
];

function createProject(title, description, img) {
    let projectCard = `
    <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
    <img src="${img}" alt="">
</div>
      `;
  
    return projectCard;
  }


const card = document.querySelector(".card");

const projects1 = document.querySelector(".projects-container");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
  
    projects1.innerHTML += createProject(project.title, project.characters, project.img);
  }



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


