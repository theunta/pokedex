const express = require('express')
const router = express.Router()
// const Pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
  Pokemon
    .findAll()
    .then(pokemon => res.json(pokemon))
})

router.post('/', (req, res) => {
  const name = req.body.name
  const type = req.body.type
  const img = req.body.img

  Pokemon
    .create(name, type, img)
    .then(eachPokemon => res.json(eachPokemon))
})

router.delete('/:id', (req,res) => {
  const pokemonId = req.params.id

  Pokemon
    .delete(pokemonId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router