//background animation--------------------------------------------------------------------------

var x;
var $cardList = $(".cardList");
var $hoverList = $cardList.find(".hoverList");

$cardList
    .on("mousemove touchmove", function(e) {
        var $card = $(e.target).closest(".card");
        if (!$card.length) return;

        var $cardListContainer = $(this);
        var zIndex = $cardListContainer.css("z-index");
        $card.css("z-index", zIndex + 1);

        var pos = [e.offsetX, e.offsetY];
        if (e.type === "touchmove") {
            pos = [e.touches[0].clientX, e.touches[0].clientY];
        }

        var l = pos[0];
        var t = pos[1];
        var h = $card.outerHeight();
        var w = $card.outerWidth();
        var px = Math.abs(Math.floor(100 / w * l) - 100);
        var py = Math.abs(Math.floor(100 / h * t) - 100);
        var pa = (50 - px) + (50 - py);

        var lp = (50 + (px - 50) / 1.5);
        var tp = (50 + (py - 50) / 1.5);
        var px_spark = (50 + (px - 50) / 7);
        var py_spark = (50 + (py - 50) / 7);
        var p_opc = 20 + (Math.abs(pa) * 1.5);
        var ty = ((tp - 50) / 2) * -1;
        var tx = ((lp - 50) / 1.5) * 0.5;

        var grad_pos = `background-position: ${lp}% ${tp}%;`;
        var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        var opc = `opacity: ${p_opc / 100};`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

        var style = `
            .hoverList .card:hover:before { ${grad_pos} }  /* gradient */
            .hoverList .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
        `;

        $cardList.find(".card").removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        $hoverList.html(style);

        if (e.type === "touchmove") {
            return false;
        }
        clearTimeout(x);
    })
    .on("mouseout touchend touchcancel", function() {
        var $cardListContainer = $(this);
        var zIndex = $cardListContainer.css("z-index");
        $cardListContainer.find(".card").css("z-index", zIndex);

        var $card = $cardList.find(".card");
        $hoverList.html("");
        $card.removeAttr("style");
        x = setTimeout(function() {
            $card.addClass("animated");
        }, 2500);
    });

//background animation END=========================================


//background Color for Types------------------------------------------------------

// Error is automatically written to the console.
// is executed in the else part

function loadBackgroundcolor(i) {


    let type = pokemonApi[i]['types'][0]['type']['name']

    if (type == "normal") {

        document.getElementById(`pokemon${i}`).classList.add("normal");
    } else if (type == "fighting") {

        document.getElementById(`pokemon${i}`).classList.add("fighting");
    } else if (type == "flying") {

        document.getElementById(`pokemon${i}`).classList.add("flying");
    } else if (type == "ground") {

        document.getElementById(`pokemon${i}`).classList.add("ground");
    } else if (type == "rock") {

        document.getElementById(`pokemon${i}`).classList.add("rock");
    } else if (type == "bug") {

        document.getElementById(`pokemon${i}`).classList.add("bug");
    } else if (type == "ghost") {

        document.getElementById(`pokemon${i}`).classList.add("ghost");
    } else if (type == "steel") {

        document.getElementById(`pokemon${i}`).classList.add("steel");
    } else if (type == "fire") {

        document.getElementById(`pokemon${i}`).classList.add("fire");
    } else if (type == "water") {

        document.getElementById(`pokemon${i}`).classList.add("water");
    } else if (type == "grass") {

        document.getElementById(`pokemon${i}`).classList.add("grass");
    } else if (type == "electric") {

        document.getElementById(`pokemon${i}`).classList.add("electric");
    } else if (type == "psychic") {

        document.getElementById(`pokemon${i}`).classList.add("psychic");
    } else if (type == "ice") {

        document.getElementById(`pokemon${i}`).classList.add("ice");
    } else if (type == "dragon") {

        document.getElementById(`pokemon${i}`).classList.add("dragon");
    } else if (type == "dark") {

        document.getElementById(`pokemon${i}`).classList.add("dark");
    } else if (type == "fairy") {

        document.getElementById(`pokemon${i}`).classList.add("fairy");
    } else if (type == "shadow") {

        document.getElementById(`pokemon${i}`).classList.add("shadow");
    } else if (type == "unknown") {

        document.getElementById(`pokemon${i}`).classList.add("unknown");
    } else if (type == "poison") {

        document.getElementById(`pokemon${i}`).classList.add("poison");
    } else {

        console.log(`Bei Pokemon ID${i} gibt es einen fehler mit type ${type}`)
    }
}

//background Color for Types END=============================================


//background color for card info-------------------------------------

function bakcgroundColorInfoCard(i) {
    let type = pokemonApi[i]['types'][0]['type']['name'];

    if (type == "normal") {
        document.getElementById('info-card').classList.add("normal");
    } else if (type == "fighting") {
        document.getElementById('info-card').classList.add("fighting");
    } else if (type == "flying") {
        document.getElementById('info-card').classList.add("flying");
    } else if (type == "ground") {
        document.getElementById('info-card').classList.add("ground");
    } else if (type == "rock") {
        document.getElementById('info-card').classList.add("rock");
    } else if (type == "bug") {
        document.getElementById('info-card').classList.add("bug");
    } else if (type == "ghost") {
        document.getElementById('info-card').classList.add("ghost");
    } else if (type == "steel") {
        document.getElementById('info-card').classList.add("steel");
    } else if (type == "fire") {
        document.getElementById('info-card').classList.add("fire");
    } else if (type == "water") {
        document.getElementById('info-card').classList.add("water");
    } else if (type == "grass") {
        document.getElementById('info-card').classList.add("grass");
    } else if (type == "electric") {
        document.getElementById('info-card').classList.add("electric");
    } else if (type == "psychic") {
        document.getElementById('info-card').classList.add("psychic");
    } else if (type == "ice") {
        document.getElementById('info-card').classList.add("ice");
    } else if (type == "dragon") {
        document.getElementById('info-card').classList.add("dragon");
    } else if (type == "dark") {
        document.getElementById('info-card').classList.add("dark");
    } else if (type == "fairy") {
        document.getElementById('info-card').classList.add("fairy");
    } else if (type == "shadow") {
        document.getElementById('info-card').classList.add("shadow");
    } else if (type == "unknown") {
        document.getElementById('info-card').classList.add("unknown");
    } else if (type == "poison") {
        document.getElementById('info-card').classList.add("poison");
    } else {
        console.log(`Bei Pokemon ID${i} gibt es einen Fehler mit type ${type}`);
    }
}