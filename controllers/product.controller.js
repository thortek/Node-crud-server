const Product = require('../models/product.model')

// simple version with no validation or sanitation
exports.test = function (req, res) {
    res.send('Greetins from the Test controller!')
}