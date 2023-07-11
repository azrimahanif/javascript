// Assignment 

// soalan 1


class Vehicle 
{
    constructor(model, year)
    {
        this.model = model;
        this.year = year;
    }

    LicenseType()
    {console.log("N/A");}

}

class Car extends Vehicle
{
    
    LicenseType()
    {
        console.log("D");
    }
}

class Motorcycle extends Vehicle
{
    LicenseType()
    {
        console.log("B2");
    }
}


let myvi = new Car("Myvi G3", 2020);
let y15 = new Motorcycle("Yamaha Y15zr", 2020);

console.log(myvi.model);
console.log(myvi.year);
myvi.LicenseType();


console.log(y15.model);
console.log(y15.year);
y15.LicenseType();
