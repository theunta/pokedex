const favourites = {
  favPoke: []
}
const state = {
    pokemon: [],
    loggedInUserName: null
}

// fetch('/api/pokemon')
//     .then(res => res.json())
//     .then(pokemon => {
//         state.pokemon = pokemon
//         renderPokemonList()
//     })

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string'){
      state.loggedInUserName = userName
    }
  })

fetch("/api/users/fav1")
  .then(res => res.json())
  .then(favPoke => {
    favourites.favPoke = favPoke
    console.log(favourites.favPoke)
  })
