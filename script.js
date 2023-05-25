let curruntPokemon;
let allPokemon = document.getElementById('all_pokemon');

let language = 5;
// Derzeitige abfrage von 20 Pokemon, muss durch zahlen ersetzt werden da json nur bis 20 geht
async function loadAllPokemon() {

    let namefirst = 1;
    // let url = "https://pokeapi.co/api/v2/pokemon"; 
    // let response = await fetch(url);
    // curruntPokemon = await response.json();
    // curruntPokemon = curruntPokemon['results'];
    // let pokemonNumber = `https://pokeapi.co/api/v2/pokemon-species//`;


    // Abfrage des JSON

    // console.log(pokemonName)
    clearAllPokemon();

    // curruntPokemon.length
    //JSON fängt bei 1 an, nicht bei 0
    for (let i = 1; i < 20; i++, namefirst++) {

        let pokemonNameUrl = `https://pokeapi.co/api/v2/pokemon-species/${namefirst}/`;
        let responseName = await fetch(pokemonNameUrl);
        let pokemonName = await responseName.json();
        pokemonName = pokemonName['names'][language]['name'];
        console.log(pokemonName)



        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;

        let response = await fetch(url);
        url = await response.json();
        let img = await loadPokemonImg(url);
        loadPokemonImg();
        loadPokemonCard(i, img, pokemonName);

    }
}


async function loadPokemonImg(url) {
    return url['sprites']['front_shiny'];

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
    loadAllPokemon();

}

function languageGerman() {
    language = 5;
    loadAllPokemon();
}