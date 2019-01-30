const Pokemon = require('../models/pokemon.model')

// simple version with no validation or sanitation
exports.test = (req, res) => {
  res.send('Greetings from the test controller!')
}

exports.pokemon_create = (req, res, next) => {
  let pokemon = new Pokemon({
    name: req.body.name,
    url: req.body.url,
  })

  pokemon.save(function(err) {
    if (err) {
      return next(err)
    }
    res.send('Pokemon created!')
  })
}
