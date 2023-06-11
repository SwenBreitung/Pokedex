function loadCardHtml(i, img, name, typeOne, pokemonId) {
    return ( /*html*/ `
    <div class="pokemon_card  cardList hover" onclick="openCardInfo('${img}', '${i}','${typeOne}','${name}','${pokemonId}')" id="pokemon${i}" style="width: 10rem;">
   
       <div  class="card-main background">
    <div class="card-above">
       <div class="m-1 fw-bold">${name}</div>
       <div class="m-1 ">ID: #${pokemonId}</div>
   </div>
   <div class="card-below">
       <div class="m-1 fw-bold">${typeOne}</div>
       <div class="bg-container"></div>
       
       <div class="image-container">
           
       <img  id="pokemon_img" src="${img}" class="card-img-top" alt="bild">
       </div>
   </div>
</div>`)
}

// function loadHtmlCardInfo(img) {
//     return /*html*/ `<div class="card-info">
//     <img src="${img}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <div>
//         <a href="#" class="btn btn-primary">Stats</a>
//         <a href="#" class="btn btn-primary">Info</a>
//         <a href="#" class="btn btn-primary">Skills</a>
//         </div>
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>`;
// }


function loadHtmlCardInfo(img, i, typeOne, name, pokemonId, pokemonText) {
    return /*html*/ `
     <div>
        <div style="min-height: 206px;
        background-color: brown;     width: 50vw;">
            <div>
                <h1 id="pokemon-name">${name}</h1>
                <span>ID# ${pokemonId}</span>
            </div>
            <img src="${img}" alt="Bild">
        </div>

        <div style="   background-color: antiquewhite;
        border-radius: 8px;
        margin-top: -20px;
        height: 124px; width: 50vw;">
        <div>
            <div style="display: flex; justify-content: center;   padding-top: 24px;">
                <a href="" style="    padding: 5px;
    border-radius: 17px;
    background-color: #3ddf46;">Info</a>
                <a href="" onclick="loadStats()" style="padding: 5px;
    border-radius: 17px;
    background-color: #3ddf46;">Stats</a>
                <a href="" style="    padding: 5px;
    border-radius: 17px;
    background-color: #3ddf46;">Skills</a>
            </div>
            <div id="text-Info-area">
            ${pokemonText}
            </div>
        </div>
        </div>
    </div>
        `
}