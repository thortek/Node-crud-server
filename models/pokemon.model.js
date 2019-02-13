const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    name: { type: String, required: true},
    url: { type: String, required: true},
    height: { type: Number, required: false},
    weight: { type: Number, required: false},
    sprite: { type: String, required: false},
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
// exporting the model named 'Pokemon' for use by our other files