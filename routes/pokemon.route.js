const express = require('express')
const router = express.Router()

const pokemon_controller = require('../controllers/pokemon.controller')

router.get('/all', pokemon_controller.all)

router.get('/find/:name', pokemon_controller.find_one)

router.post('/pokemon', pokemon_controller.pokemon_create)

router.put('/:id/update', pokemon_controller.pokemon_update)

router.delete('/:id/delete', pokemon_controller.pokemon_delete)

module.exports = router