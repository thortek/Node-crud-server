const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 5775

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})