//iterating over a string

const str = "NatashaRomanoff";
let text = "";

for(const x of str){
    text += x + "\n";
}console.log(text);


//iterating over an array

const letter = ["a", "b", "c"];
let txt = "";

for(const x of letter){
    txt += x + "\n";
}console.log(txt);

//iterating over a set

const letters = new Set(["a", "b", "c"]);
let _text = "";

for(const x of letters){
    _text += x + "\n";
}console.log(_text);

//iterating over a map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let _txt = "";

for(const x of fruits){
    _txt += x + "\n";
}console.log(_txt);
