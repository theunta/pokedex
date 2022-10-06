document.addEventListener("DOMContentLoaded", () => renderEverything());

function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  let showLoginSignup = document.querySelector("#showLoginSignup");
  showLoginSignup.innerText = "";
  renderPokemonList();
  renderNavBar()
  setTimeout(() => {
    favourite();
    renderPokeInfo()
    deleteButton() 
  }, "1000");
}

function renderFavouritePokemon() {
  fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${favourites.favPoke[0]['favourite']}/`
  )
    .then((res) => res.json())
    .then((fav1) => {
      let sprite = fav1.sprites.front_default;
      let div1 = document.querySelector("#favourite1");
      let image = document.createElement("img");
      image.src = sprite;
      div1.appendChild(image);
    });
}

function deleteButton() {
  let button = document.createElement("button");
  let trainerCard = document.querySelector(".trainerCard");
  button.textContent = "Delete";
  button.className = "deleteFav";
  trainerCard.appendChild(button);
  button.addEventListener("click", (event) => {
    var email = state.loggedInUserName;
    console.log(email);
    deleteFavourite(email);
  });
}

function deleteFavourite(email) {
  fetch(`/api/pokemon/${email}`, {
    method: "DELETE"
  });

}

function renderPokemonList() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((res) => res.json())
    .then((allPokemon) => {
      allPokemon.results.forEach((eachPokemon) => {
        renderPokemonData(eachPokemon);
      });
    });
}

function renderPokeInfo() {
  let Pokemon = document.querySelectorAll('.ui')
    Pokemon.forEach(eachPokemon => {
      let eachPokedexEntry = document.createElement("div")
      eachPokemon.addEventListener("click", (event) => {
        let content = event.target
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${eachPokemon.id}`)
        .then((res) => res.json())
        .then((allPokemon) => {
          eachPokedexEntry.innerText = `${allPokemon.flavor_text_entries[Math.floor(Math.random()* 15)+1].flavor_text}`
          eachPokemon.appendChild(eachPokedexEntry)
      }) 
    })
  })
}
    

function renderPokemonData(pokemon) {
  let url = pokemon.url;

  fetch(url)
    .then((res) => res.json())
    .then((pokeData) => {
      renderPokemon(pokeData);
    });
}


function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container");
  let pokeContainer = document.createElement("div");
  pokeContainer.classList.add("ui", "card");
  pokeContainer.setAttribute('id',`${pokeData.name}`)

  createPokeImage(pokeData.name, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;

  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${pokeData.id}`;

  let pokeTypes = document.createElement("ul");

  let pokeEntry = document.createElement("div");
  pokeEntry.className = "pokedexEntry"

  let favButton = document.createElement("button");
  favButton.className = "favButton";
  favButton.id = `${pokeData.name}`;
  favButton.innerText = "Favourite";

  createTypes(pokeData.types, pokeTypes);

  pokeContainer.append(pokeName, pokeNumber, pokeTypes, pokeEntry, favButton);
  allPokemonContainer.appendChild(pokeContainer);
}

function favourite() {
  document.querySelectorAll(".favButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      let content = event.target;
        let favourite1 = document.querySelector("#favourite1");
        favourite1.innerText = content.id;
    });
  });
}

function createTypes(types, ul) {
  types.forEach((type) => {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    ul.append(typeLi);
  });
}

function createPokeImage(pokeName, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");

  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://img.pokemondb.net/artwork/${pokeName}.jpg`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}
