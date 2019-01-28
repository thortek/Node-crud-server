const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: {type: Number, required: true},
})

const PokemonSchema = new Schema({
    name: { type: String, required: true},
    url: { type: String, required: true},
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
module.exports = mongoose.model('Product', ProductSchema)
// exporting the model named 'Product' for use by our other files