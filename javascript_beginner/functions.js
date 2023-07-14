function myFunction(p1, p2) {
  return p1 * p2;
}

let x = myFunction(4, 3);
console.log(x); //konsol ekranına 12 değerini yazdırır

function toCelsius(fahrenheit) {
  return (100 / 180) * (fahrenheit - 32);
}

let temperature = toCelsius(77);
console.log(temperature); //ekrana 25 değerini yazdırır
