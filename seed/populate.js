const fetch = require('node-fetch')

fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
  .then(res => res.json())
  .then(myJson => {
    const pokeArray = myJson.results
    pokeArray.forEach(pokemon => {
      let purl = pokemon.url
      fetch(purl)
          .then(result => result.json())
          .then(fullPokemon => {
            return newPokemon = {
              height: fullPokemon.height,
              weight: fullPokemon.weight,
              name: fullPokemon.name,
              url: purl,
              sprite: fullPokemon.sprites.front_shiny,
            }
          })
      .then(newOne => {
        console.log(newOne)
        postData(`http://localhost:5775/pokemon/pokemon`, newOne)
        .then(data => console.log(data))
        .catch(error => console.error(error))
    })
  })
})

const postData = (url = ``, data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  }).then(response => response.json()
  )
}
