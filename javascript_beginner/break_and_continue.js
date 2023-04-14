//the break statement

let text = "";
for(let i = 0; i < 10; i++){
    if(i === 3){ break; }
    text += "The number is " + i + "\n";
}console.log(text); // The number is (0, 1, 2)

//the continue statement

let txt = "";
for(let j = 0; j < 10; j++){
    if(j === 3){ continue; }
    txt += "The number is " + j + "\n";
}console.log(txt); // The number is (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

//labels

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let str = "";

list: {
    str += cars[0] + "\n";
    str += cars[1] + "\n";
    break list;
    str += cars[2] + "\n";
    str += cars[3] + "\n";
}console.log(str); // BMW Volvo
