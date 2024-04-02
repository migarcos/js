var adult = true;

let age;

if (adult) {
    var myName = 'Miguel';
    age = 25;
}

console.log(myName);

console.log(age);

document.getElementById("name").innerHTML = myName;

// using a *template* :literal string: ( ` back-tick character create a behavioral difference)
console.log(`Hello ${myName} your age ${age}`)

document.getElementById("greeting").innerHTML = `Hello ${myName} your age ${age}`;

alert("aprendiendo Javascript");

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute('src', 'https://picsum.photos/200');
newImg.setAttribute('alt', 'practicing how to apped a img with js');
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// --- Insertion DIV ---
const newSection = document.createElement("div");

const newH2 = document.createElement("h2");
newH2.innerText = "H2 tag added using JS";
const newP = document.createElement("p");
newP.innerText = "new Paragraph ";

newSection.appendChild(newH2);
newSection.appendChild(newP);

document.body.appendChild(newSection);