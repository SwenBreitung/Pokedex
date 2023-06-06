let allPokemon = document.getElementById('all_pokemon');
let firstPokemon = 1;
let maxPokemon = 21;
let PokemonApi = [null];
let PokemonSpeciesApi = [null];
let PokemonType = [null];​
function clearAllPokemon() {
    firstPokemon = 1;
    maxPokemon = 21;
    allPokemon.innerHTML = '';
}​​
// load Pokemon List------------------------------------------------------------------------------
async function loadAllPokemonList() {
    clearAllPokemon();
    resetApiArrays();
    loadPokemonListLoop(1, 152);
}​​
async function loadFirstTwentyPokemonList() {
    loadPokemonListLoop(firstPokemon, maxPokemon)
}​​
// load  20 Pokemon with Button
function loadNewTwentyPokemon() {
    loadFirstTwentyPokemonList(maxPokemon += 20, firstPokemon += 20);
}​​
// JSON beginning from 1
async function loadPokemonListLoop(firstNumber, secondNumber) {​
    for (i = firstNumber; i < secondNumber; i++) {
        await loadApis(i);
        let data = await loadpokemonListCard(i);
        await loadPokemonCard(i, data[0]['img'], data[0]['pokemonName'], data[0]['typeOne']);
    }
}​​
async function loadpokemonListCard(i) {
    let data = []; // Todo: umbennenen
    let pokemonName = await loadPokemonName(i);
    let img = await loadPokemonImg(i);
    let typeOne = await loadPokemonTypeOne(i);
    data[pokemonName, img, typeOne] // TODO: Zeile hat keinen Effekt, oder?
    data.push({ pokemonName, img, typeOne });
    return data;
}


// load Pokemon list END==================================================================


// load Pokemon Data------------------------------------------------
async function loadPokemonName(i) {
    return PokemonSpeciesApi[i]['names'][languageName]['name']; // TODO: Ersten Buchstaben klein schreiben von PokemonSpeciesApi
}​​
async function loadPokemonImg(i) {
    return PokemonApi[i]['sprites']['front_shiny'];
}​​
async function loadPokemonTypeOne(i) {
    return PokemonType[i]['names'][languageName - 1]['name'];
}
// load pokemon data end======================================
​​
// load Pokemon API´s-------------------------------
async function loadPokemonApi(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    try {
        let response = await fetch(url);
        urlAsjson = await response.json();
    } catch (e) {
        // TODO: Fehlermeldung anzeigen.
    }
    PokemonApi.push(urlAsjson);
}​​
async function loadPokemonSpeciesApi(i) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let response = await fetch(url);
    let urlAsjson = await response.json();
    PokemonSpeciesApi.push(urlAsjson);
}​​
async function loadApis(i) {
    await loadPokemonApi(i);
    await loadPokemonSpeciesApi(i);
    await loadTypeApi(i)
}​
async function loadTypeApi(i) {
    let url = PokemonApi[i]['types'][0]['type']['url'];
    let response = await fetch(url);
    let urlAsjson = await response.json();
    PokemonType.push(urlAsjson);
}


function resetApiArrays() {
    PokemonApi.splice(1, PokemonApi.length);
    PokemonSpeciesApi.splice(1, PokemonSpeciesApi.length);
    PokemonType.splice(1, PokemonType.length);
}​
// Load Pokemon API´s END=============================================
​​
// load cards for the list--------------------------------------------
async function loadPokemonCard(i, img, name, typeOne) {
    i = calcCardId(i);​
    allPokemon.innerHTML += /*html*/ `
    <div class="pokemon_card card " id="pokemon${i}" style="width: 18rem;">
   
        <div onclick="openCardInfo('${img}')" class="card-main ">
        <div class="card-above">
            <div>${name}</div>
            <div>ID: #${i}</div>
        </div>
        <div class="card-below">
        <div>${typeOne}</div>
            <div class="bg-container"></div>
            
            <div class="image-container">
                
            <img  id="pokemon_img" src="${img}" class="card-img-top" alt="bild">
            </div>
        </div>
    </div>`;
}​
// load cards for the list END==========================================
​​
// calc for the card --------------------------------------------------
// fügt allen zahlen unter 10 eine 0 hinzu
function calcCardId(i) {
    if (i < 10) {
        return (i = '00' + i);
    } else if (i > 10 && i < 99) {
        return (i = '0' + i);
    } else {
        return (i)
    }
}​
// calc for the card END=================================================
​​
// load dashbord Card info---------------------------------------------------------------------------
function openCardInfo(img) {
    document.getElementById('card_dashbord_full').classList.remove('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = loadHtmlCardInfo(img);
}​
// load dashbord Card info END==================================================
​​
// open and close Card info ------------------------------------------------------
function openCardInfo(img) {
    document.getElementById('card_dashbord_full').classList.remove('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = loadHtmlCardInfo(img);
}​​
function closeCardInfo() {
    document.getElementById('card_dashbord_full').classList.add('d-none');
    cardInfo = document.getElementById('dashbord_card');
    cardInfo.innerHTML = ``;
}​
// open and close Card info END====================================================