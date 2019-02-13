const express = require('express')
const router = express.Router()

const pokemon_controller = require('../controllers/pokemon.controller')

router.get('/all', pokemon_controller.all)

router.get('/find/:name', pokemon_controller.find_one)

router.post('/pokemon', pokemon_controller.pokemon_create)

// router.put('/:id/update', product_controller.product_update)

// router.delete('/:id/delete', product_controller.product_delete)

module.exports = router