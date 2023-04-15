//create a map

const cars = new Map([
    ["Audi", 500],
    ["Mercedes", 300],
    ["Maserati",200]
]);

//create a map

const fruits = new Map();

//set map values

fruits.set("cherry", 500);
fruits.set("kiwi", 300);
fruits.set("mango", 200);

//get() method
console.log(fruits.get("kiwi")); //300

//size property
console.log(fruits.size); //3

//delete() method 
fruits.delete("cherry");
console.log(fruits); //Map(2) {size: 2, kiwi => 300, mango => 200}

//has() method
console.log(fruits.has("mango")); //true
console.log(fruits.has("cherry")); //false

//forEach method
let text = "";
fruits.forEach(function(value, key){
    text += key + "=" + value + "\n";
})

console.log(text);

//entries() method
let txt = "";
for(const x of fruits.entries()){
    txt += x + "\n";
}

console.log(txt);