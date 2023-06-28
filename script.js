let allPokemon = document.getElementById('all_pokemon');
let firstPokemon = 1;
let maxPokemon = 21;
let pokemonApi = [null]; //API starts at 1
let pokemonSpeciesApi = [null]; //API starts at 1
let pokemonType = [null]; //API starts at 1
let pokemonTypeTwo = [null]; //API starts at 1



function ini() {
    loadFirstTwentyPokemonList();
    loadtemplates();
}


// load Header and Footer---------------------------------------------------------

function loadtemplates() {
    head.innerHTML = loadHeader();
    footer.innerHTML = loadFooter();
}


// load Header and Footer END=======================================================


//search Function------------------------------------------------------------------

async function pokemonSearch() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    clearPokemonContainer();
    for (let i = 1; i < pokemonApi.length; i++) {

        let name = await loadPokemonName(i);

        if (name.toLowerCase().includes(searchInput)) {

            let pokemonData = await loadpokemonListCard(i);
            loadPokemonCard(i, pokemonData[0]['img'], pokemonData[0]['pokemonName'], pokemonData[0]['typeOne']);

            if (i === 151) {
                document.getElementById(`button_next_pokemon`).classList.add("d-none");
            }
        }


    }
}


//search Function==========================================================================


// clear Pokemon List-------------------------------------------------------------

function clearAllPokemonData() {
    firstPokemon = 1;
    maxPokemon = 21;
    allPokemon.innerHTML = '';
}


function clearPokemonContainer() {
    allPokemon.innerHTML = '';
}


// clear Pokemon List END===========================================================================


// load Pokemon List------------------------------------------------------------------------------
async function loadAllPokemonList() {
    loadingScreenBeginning();
    clearAllPokemonData();
    resetApiArrays();
    await loadPokemonListLoop(1, 152);
    await loadingScreenEnding();
    removeButton();
}


async function loadFirstTwentyPokemonList() {
    loadingScreenBeginning();
    await loadPokemonListLoop(firstPokemon, maxPokemon)
    await loadingScreenEnding();
    addButton();
}


// load  20 Pokemon with Button
async function loadNewTwentyPokemon() {
    loadingScreenBeginning();
    await loadFirstTwentyPokemonList(maxPokemon += 20, firstPokemon += 20);
    await loadingScreenEnding();
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

//resetten canvas--------------------------------------------------------


function resetCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (canvas != null) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Destroy all chart instances associated with the canvas
        const chartInstances = Object.values(Chart.instances);
        chartInstances.forEach(chart => {
            if (chart.canvas === canvas) {
                chart.destroy();
            }
        });
    }
}


//resetten canvas END=======================================

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
}


async function loadPokemonTypeTwo(i) {
    languageText = pokemonTypeTwo[i]['names'];
    if (pokemonTypeTwo[i]['placeholder'] !== true) {
        pokemonTypeAsJson = findLanguageText(languageText)
    } else {
        pokemonTypeAsJson['name'] = pokemonSpeciesApi[i]['egg_groups'][0]['name'];
    }
    return pokemonTypeAsJson['name'];
}


function loadePokeomInfoTextButton(i) {
    let Infotext = loadPokemonInfoText(i);
    let textArea = document.getElementById('text-Info-area')
    textArea.innerHTML = `${Infotext}`;
}


function loadPokemonInfoText(i) {
    resetCanvas('radial-menu');
    languageText = pokemonSpeciesApi[i]['flavor_text_entries'];
    pokemonTextAsJson = findLanguageText(languageText)
    return pokemonTextAsJson['flavor_text'];
}


function loadPokemonStats(i) {
    //-- function in stats.js --
    Promise.all([
        loadPokemonStatsText(i),
        loadPokemonStatsNumbers(i)
    ]);
    loadStatsPokemonInfoCardHTML();
}


function loadPokemonMoves(i) {
    resetCanvas('radial-menu');
    let text = document.getElementById('text-Info-area');
    text.innerHTML = ``;
    moves = pokemonApi[i]['moves'];
    for (let j = 0; j < moves.length; j++) {
        move = pokemonApi[i]['moves'][j]['move']['name']
        text.innerHTML += `<div class="move">${move}</div>`;
    }

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


async function loadTypeApiTwo(i) {
    try {
        let url = await pokemonApi[i]['types'][1]['type']['url'];
        let urlAsjson = await (await fetch(url)).json();
        pokemonTypeTwo.push(urlAsjson);
    } catch (error) {
        pokemonTypeTwo.push({ placeholder: true });
    }
}


// load all API´s
async function loadApis(i) {
    await Promise.all([
        loadPokemonApi(i),
        loadPokemonSpeciesApi(i),
    ]);
    await loadAllStatsApiText(i);
    await loadTypeApi(i);
    loadTypeApiTwo(i);
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
    let pokemonId = calcCardId(i);
    allPokemon.innerHTML += /*html*/ loadCardTemplate(i, img, name, typeOne, pokemonId);
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


// load Dialog Card info END==================================================


// open and close Card info ------------------------------------------------------
async function openCardInfo(img, i, typeOne, name, pokemonId) {
    let typeTwo = await loadPokemonTypeTwo(i);
    let pokemonText = loadPokemonInfoText(i);
    document.getElementById('dialog-full').classList.remove('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = loadTemplateCardInfo(img, i, typeOne, name, pokemonId, pokemonText, typeTwo);
    document.body.classList.add("dashbord-fixed");
    bakcgroundColorInfoCard(i);
}


function closeCardInfo() {
    document.getElementById('dialog-full').classList.add('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = ``;
    document.body.classList.remove("dashbord-fixed");
}


// open and close Card info END====================================================

// remove and add the button--------------------------------------------------------

function removeButton() {
    document.getElementById(`button_next_pokemon`).classList.add("d-none");
    document.body.classList.remove("dashbord-fixed");
}


function addButton() {
    document.getElementById(`button_next_pokemon`).classList.remove("d-none");
}

// remove and add the button END==========================================================

//loading Screen

function loadingScreenBeginning() {
    document.getElementById(`loading-screen`).classList.remove("d-none");
    document.getElementById(`loading-screen-icon`).classList.add("pokemon");
}

async function loadingScreenEnding() {
    document.getElementById(`loading-screen`).classList.add("d-none");
    document.getElementById(`loading-screen-icon`).classList.remove("pokemon");
}