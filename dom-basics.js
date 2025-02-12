const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newHeader = document.createElement("h2");
newHeader.innerText = "DOM Basics";
const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "This was added through Javascript";
newSection.appendChild(newHeader);
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);