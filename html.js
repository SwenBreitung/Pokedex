function loadCardHtml(i, img, name, typeOne, pokemonId) {
    return ( /*html*/ `
    <div class="pokemon_card  cardList hover" onclick="openCardInfo('${img}')" id="pokemon${i}" style="width: 10rem;">
   
       <div  class="card-main background">
    <div class="card-above">
       <div class="m-1 fw-bold">${name}</div>
       <div class="m-1 fw-bold">ID: #${pokemonId}</div>
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

function loadHtmlCardInfo(img) {
    return /*html*/ `<div class="card-info">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <div>
        <a href="#" class="btn btn-primary">Stats</a>
        <a href="#" class="btn btn-primary">Info</a>
        <a href="#" class="btn btn-primary">Skills</a>
        </div>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
}