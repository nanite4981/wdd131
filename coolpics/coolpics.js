const menuButton = document.getElementById("menu");

function toggleMenu(){
    const menus = document.querySelectorAll(".menu");
    menus.forEach(menu => {
        menu.classList.toggle("hide");
    })
}
menuButton.addEventListener("click", toggleMenu);

function handleResize(){
    const menus = document.querySelectorAll(".menu");
    if (window.innerWidth > 1000){
        menus.forEach(menu => {
            menu.classList.remove("hide");
        })
    }
    else{
        menus.forEach(menu => {
            menu.classList.add("hide");
        })
    }
}

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    let element = event.target.closest("img");

	// get the src attribute from that element and 'split' it on the "-"
    let source = element.getAttribute("src");
    source = source.split("-")[0];


	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    source = source + "-full.jpeg";

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(source, element.getAttribute("alt")));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const close = document.querySelector(".viewer .close-viewer");
    close.addEventListener("click", closeViewer);

}

function closeViewer(event) {
    const view = document.querySelector(".viewer");
    view.remove();
}

const view = document.querySelector(".gallery");
view.addEventListener("click", viewHandler);

document.addEventListener
window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", handleResize);