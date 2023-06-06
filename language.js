let languageCode = 'de';

function languageEnglish() {
    languageCode = 'en';
    clearAllPokemon();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageGerman() {
    languageCode = 'de';
    clearAllPokemon();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


async function loadTypeOne() {
    let url = `https://pokeapi.co/api/v2/type/12/`;
    let urlAsjson = await (await fetch(url)).json();
    pokemonType.push(urlAsjson);
    let languageText = findLanguageText(pokemonType[1].names, languageCode);
    console.log(languageText);
}


function findLanguageText(languageText) {
    let germanyEntry = languageText.find(e => e.language.name == languageCode);
    return germanyEntry;
}


// ============================================
// this is my blueprint!
// ============================================

// async function loadRaupy() {
//     let url = 'https://pokeapi.co/api/v2/pokemon-species/10/';
//     let raupyInfo = await (await fetch(url)).json();
//     console.log(raupyInfo);
//     let desc = findText(raupyInfo.flavor_text_entries, 'de');
//     console.log(desc);
// }

// function findText(flavor_text_entries, languageCode) {
//     console.log(flavor_text_entries);
//     let germanyEntry = flavor_text_entries.find(e => e.language.name == languageCode);
//     return germanyEntry;
// }

// ===========================================