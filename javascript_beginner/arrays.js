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


//adding array element ----> push()

fruits.push("Lemon");

//or

fruits[fruits.length] = "Lemon";

//popped out element -----> pop()

fruits.pop();


//change element 
 
//fruits ----> Banana, Orange, Strawberry, Mango
fruits[2] = "Kiwi"; //fruits ----> Banana, Orange, Kiwi, Mango


//splice()

//fruits ----> Banana, Orange, Strawberry, Mango
fruits.splice(2,0,"Lemon","Kiwi"); //Banana, Orange, Lemon, Kiwi, Strawberry, Mango
fruits.splice(2,2,"Lemon","Kiwi"); //Banana, Orange, Lemon, Kiwi ----> Strawberry and Mango removed

//sort() and reverse()
//fruits ----> Banana, Orange, Strawberry, Mango
fruits.reverse(); //fruits ----> Mango, Strawberry, Orange, Banana
fruits.sort(); //fruits ----> Banana, Mango, Orange, Strawberry






