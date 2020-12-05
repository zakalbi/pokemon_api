const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const pokemonWrapper = document.querySelector('section');

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
    for(let i = 1; i < 151; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
        })
    };
    }

fetchGenOneData();