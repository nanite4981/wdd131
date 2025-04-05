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