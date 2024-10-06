const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Bulbasaur", "Jigglypuff"];
//
console.log(pokemonList[3]); //Squirtle
for (let i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i]);
}

for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon]);
}

for (let pokemon of pokemonList) {
  console.log(pokemon);
}