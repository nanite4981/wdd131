// Slideshow
var slideIndex = 0;
// slideshow();
if (window.location.pathname.includes("index")){
    slideshow();
}

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
    initializeResource("isekai", "isekaiResource", true);
    initializeResource("gold", "goldResource", true);
    initializeResource("ability", "abilityResource", true);
    initializeResource("legendary", "legendaryResource", true);
    initializeResource("wish", "wishResource", true);

    // Initializing the production
    initializeResource("truck", "truck", false);
    initializeResource("tree", "tree", false);
    initializeResource("mine", "mine", false);
    initializeResource("shop", "shop", false);
    initializeResource("farm", "farm", false);
    initializeResource("kenobi", "kenobi", false);
}

function initializeResource(id, resourceID, hide){
    if (safeNumber(id) >= 1){
        document.getElementById(resourceID).innerHTML = localStorage.getItem(id);
        if (hide){
            let element = document.getElementById(resourceID);
            element.style.visibility = "visible";
        }
    }
    else{
        document.getElementById(resourceID).innerHTML = 0;
        localStorage.setItem(id, 0);
        if (hide){
            let element = document.getElementById(resourceID);
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
    if (safeNumber(resource) >= 1){
        itemPrice = safeNumber(resource) * (1.2 - 0.1 * safeNumber("wish"));
    }
    return Math.round(itemPrice);
}

function build(id, /*resource,*/ priceResource1, priceResource2 = null){ // resource refers to what you're building. Either a resource or production. priceResource will always be a resource
    let price = getPrice(id);
    if(id === "isekai"){
        localStorage.setItem(priceResource1, 1000000000000000); // This entry detects that we are building isekai, because it has no cost, I just give infinite resource to the nonexistent resource used to build isekai
    }
    if (priceResource2){
        if (safeNumber(priceResource1) >= price && localStorage.getItem(priceResource2)){
            let newCountPrice1 = safeNumber(priceResource1) - price;
            localStorage.setItem(priceResource1, newCountPrice1);
            let newCountPrice2 = safeNumber(priceResource2) - price;
            localStorage.setItem(priceResource2, newCountPrice2);
            let newCount = safeNumber(key) + 1;
            localStorage.setItem(id, newCount);
            document.getElementById(id).innerHTML = localStorage.getItem(id);
        }
    }
    else{
        if (safeNumber(priceResource1) >= price){
            let newCountPrice = safeNumber(priceResource1) - price;
            localStorage.setItem(priceResource1, newCountPrice);
            let newCount = safeNumber(id) + 1;
            localStorage.setItem(id, newCount);
            document.getElementById(id).innerHTML = localStorage.getItem(id);
        }
    }
}

function showPrice (id, priceId, priceResource1, priceResource2 = null){// should be used to show the price when hovering over build buttons
    let price = getPrice(id);
    if (priceResource2){
        document.getElementById(priceId).innerHTML = price + " " + priceResource1 + " " + price + " " + priceResource2;
    }
    else{
        document.getElementById(priceId).innerHTML = price + " " + priceResource1;
    }
}

function showCount (id, tag){
    document.getElementById(id).innerHTML = safeNumber(tag);
}

document.addEventListener("DOMContentLoaded", function() { // Wait for things to be loaded to prevent errors
    initialize();
    console.log("Initialized");

    // loop through all the objects in resources to show how much you have
    const tagResource = ["isekai_resource","gold","ability","legendary","wish_resource"];
    const tagProduction = ["isekai","truck","tree","mine","shop","farm","kenobi","wish"];
    const resources = ["isekaiResource", "goldResource", "abilityResource", "legendaryResource", "wishResource"];
    for (let i = 0; i < resources.length; i++){
        let element = document.getElementById(tagResource[i]);

        element.addEventListener("mouseover", function() {showCount(resources[i], tagResource[i])});
    }

    // loop through all the objects in production to show how much it will cost
    const production = ["isekaiPrice", "truckPrice", "treePrice", "minePrice", "shopPrice", "farmPrice", "kenobiPrice", "wishPrice"];
    for (let i = 0; i < production.length; i++){
        let element = document.getElementById(tagProduction[i]);

        switch (production[i]){
            case "isekaiPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i])});
                break;
            case "truckPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "gold")});
                break;
            case "treePrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "isekai")});
                break;
            case "minePrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "ability")});
                break;
            case "shopPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "ability", "gold")});
                break;
            case "farmPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "gold", "legendary")});
                break;
            case "kenobiPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "isekai", "gold")});
                break;
            case "wishPrice":
                element.addEventListener("mouseover", function() {showPrice(tagProduction[i], production[i], "isekai", "gold")});
                break;
        }
    }

    // update resources
    updateResources();
    setInterval(updateResources, 1000);
});

function updateResources(){
    // isekai
    console.log("Working");
    const originalIsekais = safeNumber("isekai");
    let newIsekais = 0;
    newIsekais = safeNumber("truck");
    newIsekais = originalIsekais + newIsekais;
    localStorage.setItem("isekai", newIsekais);
    console.log(newIsekais);
    document.getElementById("isekaiResource").innerHTML = newIsekais;

    // gold
    const originalGold = safeNumber("gold");
    let newGold = 0;
    // console.log("Begin gold log");
    // console.log(safeNumber("isekai"));
    // console.log(safeNumber("mine"));
    if (safeNumber("mine") >= 1){
        newGold = safeNumber("isekai") * safeNumber("mine");
    }
    else{
        newGold = safeNumber("isekai");
    }
    // console.log(newGold);
    newGold = (originalGold + newGold);
    // console.log(newGold);
    localStorage.setItem("gold", newGold);
    console.log(newGold);
    document.getElementById("goldResource").innerHTML = newGold;

    // ability
    const originalAbility = safeNumber("ability");
    let newAbility = 0;
    if (safeNumber("farm") >= 1){
        newAbility = safeNumber("tree") * safeNumber("farm");
    }
    else{
        newAbility = safeNumber("tree");
    }
    newAbility = (originalAbility + newAbility);
    localStorage.setItem("ability", newAbility);
    console.log(newAbility);
    document.getElementById("abilityResource").innerHTML = newAbility;

    // legendary
    const originalLegendary = safeNumber("legendary");
    let newLegendary = 0;
    if (safeNumber("kenobi") >= 1){
        newLegendary = safeNumber("shop") * safeNumber("kenobi");
    }
    else{
        newLegendary = safeNumber("shop");
    }
    newLegendary = (originalLegendary + newLegendary);
    localStorage.setItem("legendary", newLegendary);
    console.log(newLegendary);
    document.getElementById("legendaryResource").innerHTML = newLegendary;

    // wish
    const originalWish = safeNumber("wish");
    // let newWish = 0; wish doesn't passively increase like the others. It's used more like something in production. SHould consider moving it.
    // newWish = safeNumber("") * 1; Would need to swap the 1 and safeNumber anyway if I used this
    // newWish = (originalWish + newWish) * safeNumber("");
    // localStorage.setItem("wish", newWish);
    console.log(originalWish);
    document.getElementById("wishResource").innerHTML = originalWish;

    // for the production, otherwise it doesn't update the resource spent when building

    // isekai
    // const originalIsekai = safeNumber("isekai"); Not needed due to using the resource above
    console.log(originalIsekais);
    document.getElementById("isekai").innerHTML = originalIsekais;

    // truck
    const originalTruck = safeNumber("truck");
    console.log(originalTruck);
    document.getElementById("truck").innerHTML = originalTruck;

    // tree
    const originalTree = safeNumber("tree");
    console.log(originalTree);
    document.getElementById("tree").innerHTML = originalTree;

    // mine
    const originalMine = safeNumber("mine");
    console.log(originalMine);
    document.getElementById("mine").innerHTML = originalMine;
    
    // shop
    const originalShop = safeNumber("shop");
    console.log(originalShop);
    document.getElementById("shop").innerHTML = originalShop;

    // farm
    const originalFarm = safeNumber("farm");
    console.log(originalFarm);
    document.getElementById("farm").innerHTML = originalFarm;

    // kenobi
    const originalKenobi = safeNumber("kenobi");
    console.log(originalKenobi);
    document.getElementById("kenobi").innerHTML = originalKenobi;
}

function safeNumber(key){
    const value = Number(localStorage.getItem(key)); // meant to prevent errors
    return isNaN(value) ? 0 : value;
}


// Stretch goal- working on tracking and itereating the day based on how long you've been playing.