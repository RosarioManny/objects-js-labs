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

console.dir(pokemon, { maxArrayLength: null })

// console.log(pokemon[58].name)

// Exercise 2

console.log("E2: ", game) 

// Exercise 3

game.difficulty = "Hard"

console.log("E3: ", game.difficulty)

// Exercise 4

game.party.push( pokemon[0])

console.log("E4: ", game.party)

// Exercise 5 

game.party.push(pokemon[17], pokemon[79], pokemon[41])

console.log("E5: ",game.party)  

// Exercise 6 

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
     game.gyms[i].completed = true
  }
}
console.log("E6: ",game.gyms)

// // Exercise 7

game.party.splice(0,1, pokemon[1])

console.log("E7: ",game.party)

// // Exercise 8
console.log("E8: ")

for(let i = 0;i < game.party.length; i++) {
  console.log(game.party[i].name)
}



// Exercise 9 
console.log("E9: ", )
for(let i = 0;i < pokemon.length; i++) {
      if (pokemon[i].starter === true) {
        console.log(pokemon[i].name)
       }
}


// // Exercise 10

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}
game.catchPokemon(pokemon[21]) 

console.log("E10 :", game.party);

// // Exercise 11

// // 1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
// // 2. How will you find and update the quantity of pokeballs in the `game.items` array?

// // Tips:
// // For this exercise, it's okay to have a negative number of pokeballs.
// // After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
// // Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

// console.log(game.items[1].quantity )

console.log("E11: ")

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
   game.items[1].quantity--
    console.log(game.items[1].quantity)
  console.log(game.party)
} 
 game.catchPokemon(pokemon[23])


// Exercise 12 

// 1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
//  (change the value of `complete` in the qualifying objects from false to true). */

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
     game.gyms[i].completed = true
  }
}
console.log("E12: ",game.gyms)

// Exercise 13 

// 1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
// 2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

// This method should:
//   - Not accept any arguments.
//   - Initially create a constant `gymTally`, which is an object that has two 
//     properties: `completed` and `incomplete`, both of which are initially set to 0.
//   - Iterate through the objects in the `game.gyms` array and update the 
//     properties on `gymTally` as follows: 
//     - `completed` should count how many gyms in the array have a value of `true` 
//       for their `completed` property. 
//     - `incomplete` should count how many gyms in the array have a value of 
//       `false` for their `completed` property.
//   - Log the value of `gymTally`.
//   - The method should not return anything.

// For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.


game.gymTally = {
  completed: 0,
  incomplete: 0
}

game.gymStatus = () => {
  game.gymTally = {
    completed: 0,
    incomplete: 0
  }
  for (let idx = 0; idx < game.gyms.length; idx++) {
    if (game.gyms[idx].completed === true) {
      game.gymTally.completed++; 
    } else { 
      game.gymTally.incomplete++
    }
  }
}

game.gymStatus()
console.log("E13: ",game.gymStatus)

// Exercise 14

// 1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

// This method should:
//   - Not accept any arguments.
//   - Count the number of Pokemon in the party.
//   - return the found number of Pokemon in the party.

game.partyCount = () => {
    console.log(game.party.length)
}
console.log("E14: ", game.partyCount)



// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).


// Exercise 15

// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).


for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty <= 8) {
     game.gyms[i].completed = true
  }
}

console.log("E15: ", game.gyms)
// Exercise 16

console.log(game)
// game.gymStatus()
// game.partyCount()