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
          const justMoves = fullPokemon.moves.map(wrapper => {
              console.log(Object.values(wrapper)[0])
              return {name: Object.values(wrapper)[0].name, url: Object.values(wrapper)[0].url}
            })
            return newPokemon = {
              height: fullPokemon.height,
              weight: fullPokemon.weight,
              name: fullPokemon.name,
              url: purl,
              id: fullPokemon.id,
              moves: justMoves,
            }
        })
        .catch(error => console.error(error))
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
