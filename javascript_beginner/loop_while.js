//while

let i = 0;
let text = "";

while(i < 10){
    text += "The number is " + i + "\n";
    i++;
}

console.log(text);


//do while

let j = 0;
let txt = "";

do{
    txt += "The number is " + j + "\n";
    j++;
}while(j < 10);

console.log(txt);



//comparing for and while

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let k = 0;
let str = "";

for(;cars[k];){
    str += cars[k] + " ";
    k++;
}console.log(str);


let m = 0;
let str2 = "";

while(cars[m]){
    str2 += cars[m] + " ";
    m++;
}console.log(str2);










