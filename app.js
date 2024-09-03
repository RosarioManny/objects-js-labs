const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
// Exercise 1

// console.dir(pokemon, { maxArrayLength: null })

// console.log("E1: ", pokemon[58].name)

// Exercise 2

// console.log("E2: ", game) 

// Exercise 3

game.difficulty = ["Hard"]

// console.log(game.difficulty)

// Exercise 4

game.party.push(pokemon[0].name)

console.log(game.party)

// Exercise 5 

game.party.push(pokemon[17].name, pokemon[79].name, pokemon[41].name)

console.log(game.party) 

// Exercise 6 

game.gyms.completed != ())

console.log(game.gyms)