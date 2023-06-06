let allPokemon = document.getElementById('all_pokemon');
let firstPokemon = 1;
let maxPokemon = 21;
let pokemonApi = [null]; //API starts at 1
let pokemonSpeciesApi = [null]; //API starts at 1
let pokemonType = [null]; //API starts at 1



// clear Pokemon List-------------------------------------------------------------

function clearAllPokemon() {
    firstPokemon = 1;
    maxPokemon = 21;
    allPokemon.innerHTML = '';
}

// clear Pokemon List END===========================================================================


// load Pokemon List------------------------------------------------------------------------------
async function loadAllPokemonList() {
    clearAllPokemon();
    resetApiArrays();
    await loadPokemonListLoop(1, 152);
    removeButton();
}


async function loadFirstTwentyPokemonList() {
    await loadPokemonListLoop(firstPokemon, maxPokemon)
    addButton();
}


// load  20 Pokemon with Button
async function loadNewTwentyPokemon() {

    await loadFirstTwentyPokemonList(maxPokemon += 20, firstPokemon += 20);

}


// JSON beginning from 1
async function loadPokemonListLoop(firstNumber, secondNumber) {

    for (i = firstNumber; i < secondNumber && i < 152; i++) {
        await loadApis(i);
        let pokemonData = await loadpokemonListCard(i);
        await loadPokemonCard(i, pokemonData[0]['img'], pokemonData[0]['pokemonName'], pokemonData[0]['typeOne']);

        if (i == 151) {
            document.getElementById(`button_next_pokemon`).classList.add("d-none");
        }
    }

}


async function loadpokemonListCard(i) {
    let pokemonData = [];
    let pokemonName = await loadPokemonName(i);
    let img = await loadPokemonImg(i);
    let typeOne = await loadPokemonTypeOne(i);
    pokemonData.push({ pokemonName, img, typeOne });
    return (pokemonData)
}

// load Pokemon list END==================================================================


// load Pokemon Data------------------------------------------------
async function loadPokemonName(i) {
    languageText = pokemonSpeciesApi[i]['names'];
    pokemonNameAsJson = findLanguageText(languageText)
    return pokemonNameAsJson['name'];
}


async function loadPokemonImg(i) {
    return pokemonApi[i]['sprites']['other']['official-artwork']['front_shiny'];
}


async function loadPokemonTypeOne(i) {
    languageText = pokemonType[i]['names'];
    pokemonTypeAsJson = findLanguageText(languageText)
    return pokemonTypeAsJson['name'];
    // return pokemonType[i]['names'][languageName - 1]['name'];
}

// load pokemon data end======================================


// load and reset PokemonPokemon API´s-------------------------------
async function loadPokemonApi(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let urlAsjson = await (await fetch(url)).json();
    pokemonApi.push(urlAsjson);
}


async function loadPokemonSpeciesApi(i) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let urlAsjson = await (await fetch(url)).json();
    pokemonSpeciesApi.push(urlAsjson);
}

async function loadTypeApi(i) {
    let url = await pokemonApi[i]['types'][0]['type']['url'];
    let urlAsjson = await (await fetch(url)).json();
    pokemonType.push(urlAsjson);
}


async function loadApis(i) {
    await loadPokemonApi(i);
    await loadPokemonSpeciesApi(i);
    await loadTypeApi(i)
}


// reset Pokemon API´s
function resetApiArrays() {
    pokemonApi.splice(1, pokemonApi.length);
    pokemonSpeciesApi.splice(1, pokemonSpeciesApi.length);
    pokemonType.splice(1, pokemonType.length);
}

// Load and reset Pokemon API´s END=============================================


// load cards for the list--------------------------------------------
async function loadPokemonCard(i, img, name, typeOne) {
    // let pokemonId = i;
    let pokemonId = calcCardId(i);
    allPokemon.innerHTML += /*html*/ loadCardHtml(i, img, name, typeOne, pokemonId);
    loadBackgroundcolor(i);
    container = document.getElementById(`pokemon${i}`);
}

// load cards for the list END==========================================


// calc for the card ID --------------------------------------------------
// adds two 0 to all numbers under 10
function calcCardId(pokemonId) {
    if (pokemonId < 10) {
        return (pokemonId = '00' + pokemonId);
    } else if (pokemonId > 10 && pokemonId < 99) {
        return (pokemonId = '0' + pokemonId);
    } else {
        return (pokemonId)
    }
}

// calc for the card ID END=================================================


// load dashbord Card info---------------------------------------------------------------------------
function openCardInfo(img) {
    document.getElementById('card_dashbord_full').classList.remove('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = loadHtmlCardInfo(img);
}

// load dashbord Card info END==================================================


// open and close Card info ------------------------------------------------------
function openCardInfo(img) {
    document.getElementById('card_dashbord_full').classList.remove('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = loadHtmlCardInfo(img);
}


function closeCardInfo() {
    document.getElementById('card_dashbord_full').classList.add('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = ``;
}

// open and close Card info END====================================================

// remove and add the button--------------------------------------------------------

function removeButton() {
    document.getElementById(`button_next_pokemon`).classList.add("d-none");
}


function addButton() {
    document.getElementById(`button_next_pokemon`).classList.remove("d-none");
}

// remove and add the button END==========================================================