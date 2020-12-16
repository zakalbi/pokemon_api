const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const pokemonWrapper = document.querySelector('section');
const pokemonContainer = document.getElementsByClassName('.pokemon-details')

// function fetchGenOne() {
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(pokemon => console.log(pokemon))
// };

// fetchGenOne();

// function fetchGenOne() {
//     fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(response => response.json())
//     .then(function(pokemon){
//         pokemon.results.forEach(function(pokemonData){
//             fetchAllPokemon(pokemonData);
//         })
//     })
// }

// let name = document.createElement('h2');
// let char = document.createElement('p');
// let habitat = document.createElement('p');

// function fetchGenOne() {
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(pokemon => console.log(pokemon))
// };

// function fetchGenOne() {
//     fetch(pokemonArr)
//     .then(response => response.json())
//     .then(function(pokemon){
//         pokemon.results.forEach(function(pokemonData){
//             fetchAllPokemon(pokemonData);
//         })
//     })
// }

function fetchGenOne() {
    fetch(baseURL)
    .then(function(result){
        return result.json()
    })
    .then(function(pokemon){
        console.log(pokemon)
        return pokemon
    })
};

fetchGenOne();

//make a for loop out with the fetch inside and make [i] and put it as the number ${i}
// this is fetching the data from the baseURL but we are replacing it's ID with string interpolation and a forloop to fetch every single pokemon
function fetchGenOneData() {
    for(let i = 1; i < 152; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            displayPokemon(pokemon);
        })
    };
    }

fetchGenOneData();

// function fetchColor(){
//     for(let i = 1; i < 152; i++){
//         fetch(`https://pokeapi.co/api/v2/pokemon-color/${i}`)
//         .then(response => response.json())
//         .then(color => {
//             console.log(color);
//         })
//     }
// }
// fetchColor();

function displayPokemon(pokeData) {
    let allPokemonContainer = document.querySelector('.pokemon-container');
    let pokemonContainer = document.createElement('div');
    let pokemonName = document.createElement('h4');
    pokemonName.innerText = pokeData.name;
    let pokemonNumber = document.createElement('p');
    pokemonNumber.setAttribute('id','pokeNumber');

    function createTypes(types, ul){
        types.forEach(function(type){
            let typeLi = document.createElement('li');
            typeLi.innerText = type['type']['name'];
            ul.appendChild(typeLi)
        })
      }

    pokemonNumber.innerText = pokeData.id;
    let img = document.createElement('img');
    img.src = pokeData.sprites.front_default;
    let pokemonTypes = document.createElement('ul');

    pokemonContainer.setAttribute('class','pokeDiv');
    createTypes(pokeData.types, pokemonTypes);

    pokemonContainer.appendChild(pokemonNumber);
    pokemonContainer.appendChild(img);
    pokemonContainer.appendChild(pokemonName);
    pokemonContainer.appendChild(pokemonTypes);
    allPokemonContainer.appendChild(pokemonContainer);

    if (pokeData.types[0].type.name === "grass"){
        pokemonContainer.setAttribute("style", "border: 3px solid #4D8235; background-color: rgba(0, 173, 1, .6);");
      } else if (pokeData.types[0].type.name === "bug"){
        pokemonContainer.setAttribute("style", "border: 3px solid #6D7815; background-color: rgba(90, 156, 33, .6);");
      } else if (pokeData.types[0].type.name === "fire") {
        pokemonContainer.setAttribute("style", "border: 3px solid #9C531E; background-color: rgba(206, 49, 49, .6);");
      } else if (pokeData.types[0].type.name === "poison") {
          pokemonContainer.setAttribute("style", "border: 3px solid #692968; background-color: rgba(173, 75, 231, .6);");
      } else if (pokeData.types[0].type.name === "normal") {
        pokemonContainer.setAttribute("style", "border: 3px solid #6C6D4E; background-color: rgba(156, 156, 156, .6);");
      } else if (pokeData.types[0].type.name === "fighting") {
        pokemonContainer.setAttribute("style", "border: 3px solid #7D1F1A; background-color: rgba(224, 140, 47, .6);");
      } else if (pokeData.types[0].type.name === "flying") {
        pokemonContainer.setAttribute("style", "border: 3px solid #6D5E9C; background-color: rgba(109, 94, 156, .6);");
      } else if (pokeData.types[0].type.name === "ground") {
        pokemonContainer.setAttribute("style", "border: 3px solid #927D44; background-color: rgba(203, 157, 27, .6);");
      } else if (pokeData.types[0].type.name === "rock") {
        pokemonContainer.setAttribute("style", "border: 3px solid #786824; background-color: rgba(82, 123, 123, .6);");
      } else if (pokeData.types[0].type.name === "ghost") {
        pokemonContainer.setAttribute("style", "border: 3px solid #493964; background-color: rgba(140, 90, 255, .6);");
      } else if (pokeData.types[0].type.name === "water") {
        pokemonContainer.setAttribute("style", "border: 3px solid #445E9C; background-color: rgba(49, 156, 231, .6);");
      } else if (pokeData.types[0].type.name === "steel") {
        pokemonContainer.setAttribute("style", "border: 3px solid #787887; background-color: rgba(184, 184, 208, .6);");
      } else if (pokeData.types[0].type.name === "ice") {
        pokemonContainer.setAttribute("style", "border: 3px solid #638D8D; background-color: rgba(0, 179, 173, .6);");
      } else if (pokeData.types[0].type.name === "electric") {
        pokemonContainer.setAttribute("style", "border: 3px solid #A18720; background-color: rgba(191, 178, 14, .6);");
      } else if (pokeData.types[0].type.name === "psychic") {
        pokemonContainer.setAttribute("style", "border: 3px solid #A13959; background-color: rgba(210, 107, 151, .6);");
      } else if (pokeData.types[0].type.name === "dragon") {
        pokemonContainer.setAttribute("style", "border: 3px solid #4924A1; background-color: rgba(0, 148, 0, .6);");
      } else if (pokeData.types[0].type.name === "fairy") {
        pokemonContainer.setAttribute("style", "border: 3px solid #EF99AC; background-color: rgba(148, 82, 148, .6);");
      } else if (pokeData.types[0].type.name === "dark") {
          pokemonContainer.setAttribute("style","border: 3px solid #705848 background-color: rgba(148, 82, 148, .6);")
      }
}

