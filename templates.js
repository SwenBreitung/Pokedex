let head = document.getElementById('header');
let footer = document.getElementById('footer');


// load header and footer-----------------------------------------------------------

function loadFooter() {
    return /*html*/ `  
        <div>Datenschutz</div>
        <div>Impressum</div>   
    `;
}


function loadHeader() {
    return ( /*html*/ ` 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Pokedex</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li class="nav-item">
                <a onclick="loadAllPokemonList()" class="nav-link" href="#">Lade Alle Pokemon</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Translate</a>
                <ul class="dropdown-menu">
                    <li><a onclick="languageGerman()" class="dropdown-item" href="#"><img class="img-german" src="./img/germany flags.png" alt="">Deutsch</a></li>
                    <li><a onclick="languageEnglish()" class="dropdown-item" href="#"><img class="img-english" src="./img/United-Kingdom.svg" alt="">Englisch</a></li>
                    <li><a onclick="languageFrance()" class="dropdown-item" href="#"><img class="img-france" src="./img/Flag-of-France.svg" alt="">Französisch</a></li>
                    <li><a onclick="languageJapanese()" class="dropdown-item" href="#"><img src="./img/JapanFlag.svg" alt="">Japanisch</a></li>
                    <li><a onclick="languageKorean()" class="dropdown-item" href="#"><img src="./img/SouthKoreaFlag.svg" alt="">Kora</a></li>
                    <li><a onclick="languageChina()" class="dropdown-item" href="#"><img src="./img/Chinese.svg" alt="">Chinesisch</a></li>
                    <li><a onclick="languageSpanish()" class="dropdown-item" href="#"><img src="./img/Spain.svg" alt="">Spanisch</a></li>                
                </ul>
            </li>
         
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" id="searchInput" onkeydown="pokemonSearch()" type="search" placeholder="Search" aria-label="Search">
            

        </form>
    </div>
</div>
</nav>`)
}

// load header and footer END===============================================


// load card and card info----------------------------------------------------
function loadCardTemplate(i, img, name, typeOne, pokemonId) {
    return ( /*html*/ `
    <div class="pokemon_card  cardList hover" onclick="openCardInfo('${img}', '${i}','${typeOne}','${name}','${pokemonId}')" id="pokemon${i}" style="width: 11rem;">
   
        <div  class="card-main background">
            <div class="card-above">
            <div class="m-1 fw-bold">${name}</div>
            <div class="m-1 ">ID: #${pokemonId}</div>
        </div>
        <div class="card-below">
            <div class="m-1 fw-bold">${typeOne}</div>
            <div class="bg-container"></div>
            <div class="image-container">
                <div class="background-layer"></div>
                <img id="pokemon_img" src="${img}" class="card-img-top" alt="bild">
            </div>
        </div>

        </div>
    </div>
    `)
}


function loadTemplateCardInfo(img, i, typeOne, name, pokemonId, pokemonText, typeTwo) {
    return ( /*html*/ `
    
         <div id="info-card" class="info-card cardList ">
            <div class="info-card-top">
                <h1 id="pokemon-name">${name}</h1>
                <span>ID# ${pokemonId}</span>
            </div >
            <div class="info-card-bottom">
            <h2 style="margin: 0;">${typeOne}<br>${typeTwo}</h2> 
            <img src="${img}" alt="Bild">
            </div>
        </div>

        <div class="info-card-text">
        <div>
            <div style="display: flex; justify-content: center;   padding-top: 24px;">
                <a href="#" class="button-card-info" onclick="loadePokeomInfoTextButton(${i})">Info</a>
                <a href="#" class="button-card-info" onclick="loadPokemonStats(${i})" >Stats</a>
                <a href="#" class="button-card-info" onclick="loadPokemonMoves(${i})">Skills</a>
            </div>
         
             <div id="text-Info-area">   ${pokemonText} </div> 
             <canvas id="radial-menu"></canvas>
             
            
        </div> 
   
    
    `)
}


function loadStatsPokemonInfoCardHTML() {
    const labels = [statsText[0], statsText[1], statsText[2], statsText[3], statsText[4], statsText[5]];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Stats',
            data: [statsNumbers[0], statsNumbers[1], statsNumbers[2], statsNumbers[3], statsNumbers[4], statsNumbers[5]],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'red'
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('radial-menu').getContext('2d');
    new Chart(ctx, config);


    //clear text area
    let textArea = document.getElementById('text-Info-area');
    textArea.innerHTML = '';

    let radianMenu = document.getElementById('radial-menu');
    radianMenu.textContent = `${statsText[0]},${statsNumbers[0]},${statsText[1]},${statsNumbers[1]},${statsText[2]},${statsNumbers[2]},${statsText[3]},${statsNumbers[3]},${statsText[4]},${statsNumbers[4]},${statsText[5]},${statsNumbers[5]}`;
}

// load card and card info END==============================================================