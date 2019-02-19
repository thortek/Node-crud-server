const Product = require('../models/product.model')
const Pokemon = require('../models/pokemon.model')

// simple version with no validation or sanitation
exports.test = (req, res) => {
  res.send('Greetings from the test controller!')
}

exports.product_create = (req, res, next) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  })

  product.save(function(err) {
    if (err) {
      return next(err)
    }
    res.send('Product created successfully')
  })
}

exports.product_update = (req, res, next) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, product) => {
      if (err) return next(err)
      res.send('Product updated.')
    },
  )
}

exports.product_delete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err)
        res.send('Deleted successfully')
    })
}
