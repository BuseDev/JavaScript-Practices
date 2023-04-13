const cars = ["Saab", "Volvo", "BMW"];

//multiple line declaration
const cars2 = [
    "Saab", 
    "Volvo",
    "BMW"
]

//create an array and provide the elements

const cars3 = [];
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";

//new keyword

const cars4 = new Array("Saab", "Volvo", "BMW");

//access array elements

let car = cars[2]; //car ----> BMW


//Objects
 
const person = {
    firstname:"Buse",
    lastname:"Boylan",
    age:20
};


//array properties and methods

cars.length //returns the number of elements
cars.sort() //sorts the array

//length

const fruits = ["Banana", "Orange", "Strawberry", "Mango"];
let length = fruits.length; //length -----> 4

//looping array elements

let text = "<ul>";
for(let i = 0; i<length; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//array.forEach()

let _text = "<ul>";
fruits.forEach(myfunction);
_text += "</ul>";

function myfunction(value){
    text += "<li>" + value + "</li>";
}








