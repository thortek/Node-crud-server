const express = require('express')
const router = express.Router()

const pokemon_controller = require('../controllers/pokemon.controller')

router.get('/test', pokemon_controller.test)

// router.post('/create', product_controller.product_create)

router.post('/pokemon', pokemon_controller.pokemon_create)

// router.put('/:id/update', product_controller.product_update)

// router.delete('/:id/delete', product_controller.product_delete)

module.exports = router