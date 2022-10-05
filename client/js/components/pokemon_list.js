document.addEventListener("DOMContentLoaded", () => renderEverything());
function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  let showLoginSignup = document.querySelector("#showLoginSignup");
  showLoginSignup.innerText = "";
  renderPokemonList();
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

  createPokeImage(pokeData.name, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;

  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${pokeData.id}`;

  let pokeTypes = document.createElement("ul");

  createTypes(pokeData.types, pokeTypes);

  pokeContainer.append(pokeName, pokeNumber, pokeTypes);
  allPokemonContainer.appendChild(pokeContainer);
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
  pokeImage.srcset = `http://img.pokemondb.net/artwork/${pokeName}.jpg`;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}
// function renderPokemon(){
//     return state.pokemon.map(eachPokemon => `
//     <section class="eachPokemon" data-id='${eachPokemon.id}'>
//         <header>
//             <h2>${eachPokemon.name}</h2>
//             <span class="material-symbols-outlined delete" onClick="deletepokemon(event)">delete</span>
//         </header>
//         <h3>Role: ${eachPokemon.type}</h3>
//         <h3>Country of Origin: ${eachPokemon.nationality}</h3>
//         <img class="image" id="image" src="${eachPokemon.img}" alt="">
//     </section>
//  `).join('')
// }

// function deletepokemon(event) {
//     const deleteBtn = event.target
//     const pokemonDOM = deleteBtn.closest('.eachPokemon')
//     const pokemonId = pokemonDOM.dataset.id

//     fetch(`/api/pokemon/${pokemonId}`, {
//         method: 'DELETE'
//     })
//         .then(() => {
//             state.pokemon = state.pokemon.filter(p => p.id != pokemonId)
//             renderpokemonList()
//         })
// }
