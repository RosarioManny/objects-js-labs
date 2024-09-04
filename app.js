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

// console.log(pokemon[58].name)

// Exercise 2

// console.log(game) 

// Exercise 3

game.difficulty = ["Hard"]

// console.log(game.difficulty)

// Exercise 4

game.party.push(pokemon[0])

// console.log(game.party)

// Exercise 5 

game.party.push(pokemon[17], pokemon[79], pokemon[41])

// console.log(game.party) 

// Exercise 6 


game.gyms[0].completed = true
game.gyms[1].completed = true

// console.log(game.gyms)

// Exercise 7

game.party.splice(0,1, pokemon[1])

// console.log(game.party)

// Exercise 8

// for(let pokemon in game.party) {
//     console.log(game.party[pokemon].name)
// }

// Exercise 9 

for(let mons in pokemon) {
    if (pokemon.starter === true)
        return pokemon
} if else () {
    return "Not a starter"
}

console.log(pokemon.starter)