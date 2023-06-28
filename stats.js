let statHpText = [null]; //API starts at 1
let statAtkText = [null]; //API starts at 1
let statDefText = [null]; //API starts at 1
let statSpezialAtkText = [null]; //API starts at 1
let statSpezialDefText = [null]; //API starts at 1
let statSpeedText = [null]; //API starts at 1
let statsText = [];
let statsNumbers = [];

// load pokemon Stats-----------------------------------------------------


// --------load pokemon Stats Text------

function loadPokemonStatsText(i) {
    //hp
    statsText[0] = loadPokemonStatText(i, statHpText);
    //atk
    statsText[1] = loadPokemonStatText(i, statAtkText);
    //def
    statsText[2] = loadPokemonStatText(i, statDefText);
    //spezialATK
    statsText[3] = loadPokemonStatText(i, statSpezialAtkText);
    //spezialDef
    statsText[4] = loadPokemonStatText(i, statSpezialDefText);
    //Speed
    statsText[5] = loadPokemonStatText(i, statSpeedText);

}


function loadPokemonStatText(i, stat) {
    languageText = stat[i]['names'];
    pokemonTextAsJson = findLanguageText(languageText)
    return pokemonTextAsJson['name'];
}


// ========load pokemon Stats Text end=====

// --------load pokemon Stats Number------

function loadPokemonStatsNumbers(i) {
    //HP 
    statsNumbers[0] = loadPokemonStatNumber(i, 0);
    //atk 
    statsNumbers[1] = loadPokemonStatNumber(i, 1);
    //def
    statsNumbers[2] = loadPokemonStatNumber(i, 2);
    //spezialAtk
    statsNumbers[3] = loadPokemonStatNumber(i, 3);
    //spezialDef
    statsNumbers[4] = loadPokemonStatNumber(i, 4);
    //speed
    statsNumbers[5] = loadPokemonStatNumber(i, 5);
}


function loadPokemonStatNumber(i, number) {
    number = pokemonApi[i]['stats'][`${number}`]['base_stat']
    return number
}


// ========load pokemon Stats Numbers end=====


// load pokemon Stats END=================================================

// stats API-----------------------------------------

async function loadAllStatsApiText(i) {
    await Promise.all([
        loadStatApi(i, 0, statHpText),
        loadStatApi(i, 1, statAtkText),
        loadStatApi(i, 2, statDefText),
        loadStatApi(i, 3, statSpezialAtkText),
        loadStatApi(i, 4, statSpezialDefText),
        loadStatApi(i, 5, statSpeedText)
    ]);
}


async function loadStatApi(i, number, statArray) {
    let url = pokemonApi[i].stats[number].stat.url;
    let urlAsJson = await fetch(url).then(response => response.json());
    statArray.push(urlAsJson);
}


// Pokemon numbers in pokemonApi

// stats API END==================================