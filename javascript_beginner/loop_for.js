//for

const cars = ["Saab", "Volvo", "BMW"];

//for(let i = 0; i<cars.length; i++){
//    text += cars[i] + "<br>";
//}


//for in

const person = {fname:"John", lname:"Doe", age:25}; //declared an object

let text = "";
for(let x in person){
    text += person[x] + " "
}

console.log(text); //John Doe 25


//Array.forEach()

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + " ";
}

console.log(txt); //45 4 9 16 25


//for of

//looping over an array
const _cars = ["BMW", "Volvo", "Mini"];

let _txt = "";
for(let x of _cars){
    _txt += x + " "; //x represents the elements in the _cars
}

console.log(_txt); //BMW Volvo Mini


//looping over a string
let language = "JavaScript"; //language is a string

let _text = "";
for(let x of language){//x represents the characters in languagae
    _text += x;
}

console.log(_text); //JavaScript



