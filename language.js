let languageCode = 'de';

// language search------------------------------------------------------------

function findLanguageText(languageText) {
    let germanyEntry = languageText.find(e => e.language.name == languageCode);
    return germanyEntry;
}

// language search END===================================================


// languageCode-----------------------------------------------------

function languageEnglish() {
    languageCode = 'en';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageGerman() {
    languageCode = 'de';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageFrance() {
    languageCode = 'fr';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageJapanese() {
    languageCode = 'ja-Hrkt';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageKorean() {
    languageCode = 'ko';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageChina() {
    languageCode = 'zh-Hant';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}


function languageSpanish() {
    languageCode = 'es';
    clearAllPokemonData();
    resetApiArrays();
    loadFirstTwentyPokemonList()
}

// languageCode END======================================================


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