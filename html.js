function loadCardHtml(i, img, name) {
    return ( /*html*/ `
 
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

    </div>`);

}

function loadHtmlCardInfo(img) {
    return `<div class="card">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <div>
            <button></button>
            <button></button>
            <button></button>
        </div>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
}


// async function loadFirstTwentyPokemon() {
//     let g = PokemonApi.length + 1;
//     let i = firstPokemon;
//     //JSON beginning from 1
//     for (firstPokemon; firstPokemon < maxPokemon; firstPokemon++, g++, i++) {

//         if (firstPokemon == g) {
//             let pokemonName = await loadPokemonName(i);
//             let img = await loadPokemonImg(i);
//             loadPokemonCard(i, img, pokemonName);

//         } else {
//             await loadPokemonApi(i);
//             await loadPokemonSpeciesApi(i);
//             let pokemonName = await loadPokemonName(i);
//             let img = await loadPokemonImg(i);
//             loadPokemonCard(i, img, pokemonName);
//             // await loadFirstTwentyPokemonList(i, maxPokemon);
//         }
//     }
// }