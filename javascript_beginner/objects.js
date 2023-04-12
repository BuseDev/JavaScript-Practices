const car = {
    type: "Audi",
    model: "2012",
    color: "black"
}

//objenin özelliklerine

 console.log(car.type); //Audi
 console.log(car["color"]); //black

 //olmak üzere iki farklı şekilde ulaşabiliriz

const person = {
    firstname: "Buse",
    lastname: "Boylan",
    age: "20",
    fullname: function(){
        return this.firstname + " " + this.lastname; //this keyword refers to the person object
    }
}
