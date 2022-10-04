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