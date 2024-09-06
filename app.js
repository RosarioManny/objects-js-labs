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


for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
     game.gyms[i].completed = true
  }
}
console.log(game.gyms)

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
     game.gyms[i].completed = true
  }
}
console.log(game.gyms)


// console.log(game.gyms)

// Exercise 7

game.party.splice(0,1, pokemon[1])

// console.log(game.party)

// Exercise 8

// for(let pokemon in game.party) {
//     console.log(game.party[pokemon].name)
// }

// Exercise 9 

// pokemon.forEach((poke, index) => {
//   if (poke.starter) {
//     console.log(poke.name)
//   }
// })

// Exercise 10

// game.catchPokemon = (pokemonObj) => {
//   game.party.push(pokemonObj)
// }
// game.catchPokemon(pokemon[21]) 

// console.log(game.party)

// Exercise 11

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


// console.log(game.items[1].quantity )

// let pokeBalls = game.items[1].quantity

// console.log(pokeBalls)

// game.catchPokemon = (pokemonObj) => {
//   game.party.push(pokemonObj)
//   pokeBalls = pokeBalls - 1
// }

// console.log(pokeBalls)


// Exercise 12 
/*
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true). */

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
     game.gyms[i].completed = true
  }
}
console.log(game.gyms)

// Exercise 13 

let gymStatus = game.gyms.completed 