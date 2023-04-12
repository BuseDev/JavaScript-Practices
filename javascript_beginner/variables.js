var x = 5;
var y = 6;
var z = x + y;

let x = 5;
let y = 6;
let z = x + y;

//const ile tanımlanan değişkenler değiştirilemez
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

const pi = 3.14;

let person = "John Doe", carName = "Mercedez", price = 200; //person, carName ve price değişkenleri let olarak tek satırda tanımlanabilir

//let ile tanımlanmış bir değişken tekrar tanımlanamaz
let x ="John Doe";
let x = 0;
//bu yazım yanlıştır ve program bu satırda hata verir

//bu durum var değişkeni ile söz konusu değildir. aşağıdaki gibi tanımlama yapılabilir
var y = "John Doe";
var y = 0;

/*BLOCK SCOPE
ES6'dan (2015) önce, JavaScript'in Küresel Kapsamı ve İşlev Kapsamı vardı.
ES6, iki önemli yeni JavaScript anahtar sözcüğünü kullanıma sundu: let ve const.
Bu iki anahtar kelime, JavaScript'te Blok Kapsamı sağlar.
Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilemez*/

{
    let x = 2;
}
//x can not be used here

{
    var x = 2;
}
//x can be used here


//DATA TYPES

// Object:
const _person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
