let allPokemon = document.getElementById('all_pokemon');
let firstPokemon = 1;
let maxPokemon = 20;
let language = 5;


// load all 151 Pokemon 
async function loadAllPokemon() {

    clearAllPokemon();
    //JSON fängt bei 1 an, nicht bei 0
    for (let i = 1; i < 152; i++) {

        let pokemonName = await loadAPISpecies(i);
        let img = await loadPokemonImg(i);
        loadPokemonCard(i, img, pokemonName);

    }
}


// load  20 Pokemon with autoload---------------------------------------------
async function loadFirstTwentyPokemon() {

    //JSON beginning from 1
    for (let i = firstPokemon; i < maxPokemon; firstPokemon++, i++) {;;
        let Name = await loadAPISpecies(i);
        let img = await loadPokemonImg(i);
        loadPokemonCard(i, img, Name);
    }
}


// load  20 Pokemon with Button------------------------------------
function loadNewTwentyPokemon() {
    maxPokemon += 20;
    loadFirstTwentyPokemon();
}


async function loadPokemonImg(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url);
    url = await response.json();
    return url['sprites']['front_shiny'];
}


async function loadAPISpecies(i) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let response = await fetch(url);
    let Name = await response.json();
    Name = Name['names'][language]['name'];
    return (Name);
}


async function loadPokemonCard(i, img, name) {
    allPokemon.innerHTML += /*html*/ `
    <div class="pokemon_card" id="pokemon${i}">
        <div class="card" style="width: 18rem;">
            <img id="pokemon_img" src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><div><div>Name:</div><div>ID:${i}</div></div>
            <div><div>Typ:</div><div>Attak:</div></div></p>
            </div>
        </div>
    </div>`;
}


function clearAllPokemon() {
    allPokemon.innerHTML = '';
}


function languageEnglish() {
    language = 6;
    firstPokemon = 1;
    clearAllPokemon();
    loadFirstTwentyPokemon()
}


function languageGerman() {
    language = 5;
    firstPokemon = 1;
    clearAllPokemon();
    loadFirstTwentyPokemon()
}