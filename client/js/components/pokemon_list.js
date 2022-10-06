document.addEventListener("DOMContentLoaded", () => renderEverything());

function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  let showLoginSignup = document.querySelector("#showLoginSignup");
  showLoginSignup.innerText = "";
  renderPokemonList();
  setTimeout(() => {
    favourite()
  }, "1000")
}

function renderFavouritePokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon-form/${favourites.favPoke[4]['favourite1']}/`)
    .then((res) => res.json())
    .then((fav1) => {
      let sprite = fav1.sprites.front_default
      let div1 = document.querySelector('#favourite1')
      let button = document.createElement('button')
      let image = document.createElement('img') 
      let trainerCard = document.querySelector('.trainerCard')
      button.textContent = 'Delete'
      button.className = 'deleteFav'
      image.src = sprite
      trainerCard.appendChild(button)
      div1.appendChild(image)

      button.addEventListener('click', event => {
        var email = state.loggedInUserName
        console.log(email)
        deleteFavourite(email)
      })
    })
}
function deleteFavourite(email) {
  fetch(`/api/pokemon/${email}`, {
    method: 'DELETE'
    })
    // .then(() => {
    //   state.pokemon = state.pokemon.filter(p => p.id != pokemonId)
    //   renderPokemonList()
    // })
}

function renderPokemonList() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((res) => res.json())
    .then((allPokemon) => {
      allPokemon.results.forEach((eachPokemon) => {
        renderPokemonData(eachPokemon);
      });
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

  createPokeImage(pokeData.name, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;

  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${pokeData.id}`;

  let pokeTypes = document.createElement("ul");

  let favButton = document.createElement("button");
  favButton.className = 'favButton'
  favButton.id = `${pokeData.name}`
  favButton.innerText = "Favourite"

  createTypes(pokeData.types, pokeTypes);

  pokeContainer.append(pokeName, pokeNumber, pokeTypes, favButton);
  allPokemonContainer.appendChild(pokeContainer);
  
}
// document.addEventListener('DOMContentLoaded',() => {

// })
function favourite() {
  document.querySelectorAll('.favButton')
  .forEach(button => {
    button.addEventListener('click',(event) => {
      let content = event.target
      if(favourite1.textContent == ''){
        let favourite1 = document.querySelector('#favourite1')
        favourite1.innerText = content.id
      } else if(favourite2.textContent == ''){
        let favourite2 = document.querySelector('#favourite2')
        favourite2.innerText = content.id
      }  else if(favourite3.textContent == ''){
        let favourite3 = document.querySelector('#favourite3')
        favourite3.innerText = content.id
      }  else if(favourite4.textContent == ''){
        let favourite4 = document.querySelector('#favourite4')
        favourite4.innerText = content.id
      }  else if(favourite5.textContent == ''){
        let favourite5 = document.querySelector('#favourite5')
        favourite5.innerText = content.id
      }  else if(favourite6.textContent == ''){
        let favourite6 = document.querySelector('#favourite6')
        favourite6.innerText = content.id
      } 
    })
  })
}


// function favPokemon(event) {
//     const favButton = event.target
//     const pokemonDOM = favButton.closest('.eachPokemon')
//     console.log(pokemonDOM)
// }

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
