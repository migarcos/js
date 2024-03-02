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