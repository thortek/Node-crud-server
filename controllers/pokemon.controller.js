const Pokemon = require('../models/pokemon.model')

// simple version with no validation or sanitation
exports.test = (req, res) => {
  res.send('Greetings from the test controller!')
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
