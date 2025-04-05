// Slideshow
var slideIndex = 0;
slideshow();

function slideshow(){
    var i;
    var x = document.getElementsByClassName("slides"); // Tried getElementByID, have to use this one because you need all the elements to hide them
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length)
    {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";

    setTimeout(slideshow, 10000); // 1000 is 1 second
}

// document.getElementById("demo").innerHTML = localStorage.clickcount;

// function clickCounter(clickcount){
//     if (localStorage.clickcount){
//         localStorage.clickcount = Number(localStorage.clickcount) + 1;
//     }
//     else{
//         localStorage.clickcount = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcount;
// }
// Was for testing and practice. Group commented out.

function initialize(){
    initializeResource("isekaiResource", true);
    initializeResource("goldResource", true);
    initializeResource("abilityResource", true);
    initializeResource("legendaryResource", true);
    initializeResource("wishResource", true);

    // Initializing the production
    initializeResource("truck", false);
    initializeResource("tree", false);
    initializeResource("mine", false);
    initializeResource("shop", false);
    initializeResource("farm", false);
    initializeResource("kenobi", false);
}

function initializeResource(id, hide){
    if (Number(localStorage.getItem(id)) >= 1){
        document.getElementById(id).innerHTML = localStorage.getItem(id);
        if (hide){
            let element = document.getElementById(id);
            element.style.visibility = "visible";
        }
    }
    else{
        document.getElementById(id).innerHTML = 0;
        localStorage.setItem(id, 0);
        if (hide){
            let element = document.getElementById(id);
            element.style.visibility = "hidden";
        }
    }
}

function getPrice(resource){
    if (resource === "isekai"){
        itemPrice = 0;
    }
    else if (resource === "truck"){
        itemPrice = 10;
    }
    else if (resource === "tree"){
        itemPrice = 15;
    }
    else if (resource === "mine"){
        itemPrice = 30;
    }
    else if (resource === "shop"){
        itemPrice = 75;
    }
    else if (resource === "farm"){
        itemPrice = 150;
    }
    else if (resource === "kenobi"){
        itemPrice = 200;
    }
    else if (resource === "wish"){
        itemPrice = 10000;
    }
    else{
        itemPrice = 1000000; // Inflated default price because you shouldn't be able to buy anything unless it corresponds to one of these id's
    }
    if (Number(localStorage.getItem(resource)) >= 1){
        itemPrice = Number(localStorage.getItem(resource)) * (1.2 - 0.1 * Number(localStorage.getItem("wish")));
    }
    return Math.round(itemPrice);
}

function build(id, /*resource,*/ priceResource1, priceResource2 = null){ // resource refers to what you're building. Either a resource or production. priceResource will always be a resource
    let price = getPrice(id);
    if(id === "isekai"){
        localStorage.setItem(priceResource1, 1000000000000000);
    }
    if (priceResource2){
        if (Number(localStorage.getItem(priceResource1)) >= price && localStorage.getItem(priceResource2)){
            let newCountPrice1 = Number(localStorage.getItem(priceResource1)) - price;
            localStorage.setItem(priceResource1, newCountPrice1);
            let newCountPrice2 = Number(localStorage.getItem(priceResource2)) - price;
            localStorage.setItem(priceResource2, newCountPrice2);
            let newCount = Number(localStorage.getItem(id)) + 1;
            localStorage.setItem(id, newCount);
            document.getElementById(id).innerHTML = localStorage.getItem(id);
        }
    }
    else{
        if (Number(localStorage.getItem(priceResource1)) >= price){
            let newCountPrice = Number(localStorage.getItem(priceResource1)) - price;
            localStorage.setItem(priceResource1, newCountPrice);
            let newCount = Number(localStorage.getItem(id)) + 1;
            localStorage.setItem(id, newCount);
            document.getElementById(id).innerHTML = localStorage.getItem(id);
        }
    }
}

function showPrice (id, priceResource1, priceResource2 = null){// should be used to show the price when hovering over build buttons
    let price = getPrice(id);
    if (priceResource2){
        document.getElementById(id).innerHTML = price + " " + priceResource1 + " " + price + " " + priceResource2;
    }
    else{
        document.getElementById(id).innerHTML = price + " " + priceResource1;
    }
}

function showCount (id){
    document.getElementById(id).innerHTML = localStorage.getItem(id);
}

document.addEventListener("DOMContentLoaded", function() {
    initialize();

    // loop through all the objects in resources to show how much you have
    const resources = ["isekaiResource", "goldResource", "abilityResource", "legendaryResource", "wishResource"];
    for (let i = 0; i < resources.length; i++){
        let element = document.getElementById(resources[i]);

        element.addEventListener("mouseover", function() {showCount(resources[i])});
    }

    // loop through all the objects in production to show how much it will cost
    const production = ["isekaiPrice", "truckPrice", "treePrice", "minePrice", "shopPrice", "farmPrice", "kenobiPrice", "wishPrice"];
    for (let i = 0; i < production.length; i++){
        let element = document.getElementById(production[i]);

        switch (production[i]){
            case "isekaiPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i])});
                break;
            case "truckPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "gold")});
                break;
            case "treePrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "isekai")});
                break;
            case "minePrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "ability")});
                break;
            case "shopPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "ability", "gold")});
                break;
            case "farmPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "gold", "legendary")});
                break;
            case "kenobiPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "isekai", "gold")});
                break;
            case "wishPrice":
                element.addEventListener("mouseover", function() {showPrice(production[i], "isekai", "gold")});
                break;
        }
    }

    // update resources
    setInterval(updateResources(), 1000);
})

function updateResources(){
    // isekai
    const originalIsekais = Number(localStorage.getItem("isekai"));
    let newIsekais = 0;
    newIsekais = Number(localStorage.getItem("truck")) * 1;
    newIsekais = originalIsekais + newIsekais;
    localStorage.setItem("isekai", newIsekais);

    // gold
    const originalGold = Number(localStorage.getItem("gold"));
    let newGold = 0;
    newGold = Number(localStorage.getItem("isekai")) * 1;
    newGold = (originalGold + newGold) * Number(localStorage.getItem("mine"));
    localStorage.setItem("gold", newGold);

    // ability
    const originalAbility = Number(localStorage.getItem("ability"));
    let newAbility = 0;
    newAbility = Number(localStorage.getItem("tree")) * 1;
    newAbility = (originalAbility + newAbility) * Number(localStorage.getItem("farm"));
    localStorage.setItem("ability", newAbility);

    // legendary
    const originalLegendary = Number(localStorage.getItem("legendary"));
    let newLegendary = 0;
    newLegendary = Number(localStorage.getItem("shop")) * 1;
    newLegendary = (originalLegendary + newLegendary) * Number(localStorage.getItem("kenobi"));
    localStorage.setItem("legendary", newLegendary);
}