const Pokemon = require('../models/pokemon.model')

// simple version with no validation or sanitation
exports.all = (req, res) => {
  Pokemon.find({})
  .then( (allPokemon) => res.json(allPokemon))
}

exports.find_one = (req, res) => {
  Pokemon.findOne({ name: req.params.name })
  .then( (foundPokemon) => res.json(foundPokemon))
}

exports.pokemon_create = (req, res, next) => {
  let pokemon = new Pokemon({
    name: req.body.name,
    url: req.body.url,
    height: req.body.height,
    weight: req.body.weight,
  })

  pokemon.save(function(err) {
    if (err) {
      return next(err)
    }
    res.json(pokemon)
  })
}
