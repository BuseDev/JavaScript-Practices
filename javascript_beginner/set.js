//Create a set

const letters = new Set(["a", "b", "c"]);

//Create a set

const fruits = new Set();

//Add values to the set

fruits.add("banana");
fruits.add("orange");
fruits.add("mango");

console.log(fruits); // Set(3) {size: 3, banana, orange, mango}

//Create variables

const a = "cherry";
const b = "kiwi";
const c = "pineapple";

//Add variables to the set

fruits.add(a);
fruits.add(b);
fruits.add(c);

console.log(fruits); // Set(6) {size: 6, banana, orange, mango, cherry, kiwi, ...}


//forEach() method

let text = "";
fruits.forEach(function(value){
    text += value + " ";
})

console.log(text); //banana orange mango cherry kiwi pineapple




