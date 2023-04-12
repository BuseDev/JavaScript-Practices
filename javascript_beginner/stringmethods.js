let text = "ABCDEFGHIJKLMNO"; //string ifadeler çift tırnak içinde yazılır
let length = text.length; //stringin uzunluğu için length keyword u kullanılır
 console.log(length); //length değeri 15 tir

 //backslash (\) ile özel karakterleri strin içinde kullanabiliriz
 let text2 = "We are so-called \"Vikings\" from the north.";
 let text3 = 'It\'s alright.'
 let text4 = "The character \\ is called backslash."

 console.log(text2);
 console.log(text3);
 console.log(text4);

 //Strings as Objects

 let x ="John"; //string
 let y = new String("John"); //object


/*
There are 3 methods for extracting a part of a string:
slice(start, end)
substring(start, end)
substr(start, length)
*/

//slice()

let fruits = "Apple, Banana, Kiwi";
let p1 = fruits.slice(7, 13); //p1 değişkeni "Banana" değerine eşittir
let p2 = fruits.slice(7); //p2 değişkeni "Banana, Kiwi" değerine eşittir

//substring()

let str = "Apple, Banana, Kiwi";
let p3 = str.substring(7, 13);//p3 değişkeni "Banana" değerine eşittir

/*
substring(), slice() işlevine benzer.
Aradaki fark, 0'dan küçük başlangıç ​​ve bitiş değerlerinin substring()'de 0 olarak ele alınmasıdır.
*/


//substr()

let p4 = fruits.substr(7, 6);//ikinci parametre başlangıç değerinden itibaren alınacak stringin uzunluğunu temsil eder
console.log(p4);//Ekrana "Banana" yazdırır

//Aradaki fark, ikinci parametrenin çıkarılan parçanın uzunluğunu belirtmesidir.



//replace()

let txt = "Please visit Microsoft!";
let newtxt = txt.replace("Microsoft", "W3Schools");
console.log(newtxt); //Please visit W3Schools!

//replaceAll()

let txt2 = "I love cats. Cats are very easy to love. Cats are very popular.";
txt2 = txt2.replaceAll("Cats", "Dogs");
txt2 = txt2.replaceAll("cats", "dogs");

console.log(txt2);


//toUpperCase()

let txt3 = "Hello World!";
let txt4 = txt3.toUpperCase();
console.log(txt4); //HELLO WORLD!

//toLowerCase()

let txt5 = txt3.toLowerCase();
console.log(txt5); //hello world!

//concat()

let txt6 = "Hello";
let txt7 = "World";
let txt8 = txt6.concat(" ", txt7); 
console.log(txt8);//Hello World

//trim()

let str1 = "         Hello World!   ";
let str2 = str1.trim(); //baştaki ve sondaki boşlukları siler ------> Hello World!

//charAt()

let str3 = "Hello World!"; 
let char = str3.charAt(0); //"H" değerini gösterir

//indexOf()

let text5= "Please locate where 'locate' occurs!";
let index = text5.indexOf("locate");
console.log(index); //7

//search()

let index2 = text5.search("locate");
console.log(index2); //7


//inclueds()

let text6 = "Hello world, welcome to the universe.";
let index3 = text6.includes("world");
console.log(index3);











