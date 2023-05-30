let allPokemon = document.getElementById('all_pokemon');
let firstPokemon = 1;
let maxPokemon = 21;
let ApiPokemon = [];
let ApiPokemonSpecies = [];

// load all 151 Pokemon 
async function loadAllPokemon() {

    clearAllPokemon();
    //JSON fängt bei 1 an, nicht bei 0

    for (let i = 1; i < 152; i++) {

        let pokemonName = await loadAPISpecies(i);
        let img = await loadPokemon(i);

        loadPokemonCard(i, img, pokemonName);

    }
}


// load  20 Pokemon with autoload------------------------------------
async function loadFirstTwentyPokemon() {

    //JSON beginning from 1
    for (firstPokemon; firstPokemon < maxPokemon; firstPokemon++) {
        let Name = await loadAPISpecies(firstPokemon);
        let img = await loadPokemon(firstPokemon);

        loadPokemonCard(firstPokemon, img, Name);
    }
}


// load  20 Pokemon with Button------------------------------------
function loadNewTwentyPokemon() {
    loadFirstTwentyPokemon(maxPokemon += 20);
}


async function loadPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(url);
    url = await response.json();
    ApiPokemon.push(url);
    img = loadPokemonIMG(url);
    // type = loadPokemonType(url);
    return (img);
}


// function loadPokemonType(url) {
//     let type1 = url['types'][1]['type']['name']
//     if (url['types'][1]) {
//         let type2 = url['types'][1]['type']['name']
//     }
//     return url['types']
// }


function loadPokemonIMG(url) {
    return url['sprites']['front_shiny'];
}


async function loadAPISpecies(i) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let response = await fetch(url);
    let Name = await response.json();
    Name = Name['names'][languageName]['name'];
    return (Name);
}


async function loadPokemonCard(i, img, name) {
    i = calcCardId(i);
    allPokemon.innerHTML += /*html*/ `
    <div class="pokemon_card card " id="pokemon${i}" style="width: 18rem;">
   
        <!-- <div class="card" style="width: 18rem;">
            <img onclick="openCardInfo('${img}')" id="pokemon_img" src="${img}" class="card-img-top" alt="bild">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><div><div>Name:</div><div>ID: #${i}</div></div></p>
            <div>
                <div>Typ:sadsd</div><div>Attak:</div></div>
            </div>
        </div> -->

        <div onclick="openCardInfo('${img}')" class="card-main ">
        <div class="card-above">
            <div>${name}</div>
            <div>ID: #${i}</div>
        </div>
        <div class="card-below">
        <div>sadasd</div>
            <div class="bg-container"></div>
            
            <div class="image-container">
                
            <img  id="pokemon_img" src="${img}" class="card-img-top" alt="bild">
            </div>
        </div>
    </div>

    </div>`;
}


function clearAllPokemon() {
    allPokemon.innerHTML = '';
}

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


// fügt allen zahlen unter 10 eine 0 hinzu
function calcCardId(i) {
    if (i < 10) {
        return (i = '00' + i);
    } else if (i > 10 && i < 99) {
        return (i = '0' + i);
    } else {
        return (i)
    }

}